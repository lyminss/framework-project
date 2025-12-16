<template>
    <div class="container-xl py-5 skills-page">
        <!-- Header -->
        <header class="page-header mb-4">
            <h1 class="page-title mb-2">
                Kỹ Năng & Kinh Nghiệm
            </h1>
            <p class="page-subtitle">
                Tổng hợp các kỹ năng chuyên môn, kinh nghiệm làm việc và quá trình học tập
            </p>
        </header>

        <!-- Loading -->
        <div v-if="loading" class="loading-state text-center py-5">
            <div class="spinner-border text-secondary" role="status"></div>
            <p class="mt-3 text-muted small">Đang tải dữ liệu...</p>
        </div>

        <!-- Content -->
        <div v-else-if="personal" class="row g-4">
            <!-- LEFT -->
            <div class="col-lg-6">
                <SkillsCard title="Kỹ Năng Chuyên Môn" subtitle="Hard Skills" type="hard" cardClass="mb-3"
                    :emptyText="'Chưa có dữ liệu kỹ năng chuyên môn'">
                    <div v-if="hardSkills.length" class="stack-list">
                        <SkillProgress v-for="skill in hardSkills" :key="skill._id" :skill="skill" />
                    </div>
                </SkillsCard>

                <SkillsCard title="Kỹ Năng Mềm" subtitle="Soft Skills" type="soft"
                    :emptyText="'Chưa có dữ liệu kỹ năng mềm'">
                    <div v-if="softSkills.length" class="row g-2">
                        <SoftSkillItem v-for="skill in softSkills" :key="skill._id" :skill="skill" />
                    </div>
                </SkillsCard>
            </div>

            <!-- RIGHT -->
            <div class="col-lg-6">
                <SkillsCard title="Học Vấn" subtitle="Education" type="education" cardClass="mb-3"
                    :emptyText="'Chưa có thông tin học vấn'">
                    <div v-if="personal.education.length" class="timeline clean-timeline">
                        <EducationItem v-for="(edu, index) in personal.education" :key="index" :education="edu" />
                    </div>
                </SkillsCard>

                <SkillsCard title="Kinh Nghiệm Làm Việc" subtitle="Experience" type="experience"
                    :emptyText="'Chưa có thông tin kinh nghiệm làm việc'">
                    <div v-if="personal.experience.length" class="experience-stack">
                        <ExperienceItem v-for="(exp, index) in personal.experience" :key="index" :experience="exp"
                            :isLast="index === personal.experience.length - 1" />
                    </div>
                </SkillsCard>
            </div>
        </div>

        <!-- Empty -->
        <div v-else class="empty-state text-center py-5">
            <i class="bi bi-person-x fs-1 text-muted mb-3"></i>
            <h6 class="text-muted">Không tìm thấy thông tin</h6>
            <p class="text-muted small">Vui lòng thử lại sau</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

// Import components
import SkillsCard from '../components/SkillsCard.vue'
import SkillProgress from '../components/SkillProgress.vue'
import SoftSkillItem from '../components/SoftSkillItem.vue'
import EducationItem from '../components/EducationItem.vue'
import ExperienceItem from '../components/ExperienceItem.vue'

import type { Skill, Personal } from '../models/types'

const skills = ref<Skill[]>([])
const personal = ref<Personal | null>(null)
const loading = ref(true)

const hardSkills = computed(() => skills.value.filter(s => s.type === 'hard'))
const softSkills = computed(() => skills.value.filter(s => s.type === 'soft'))

const fetchData = async () => {
    loading.value = true

    try {
        const [resSkill, resPersonal] = await Promise.all([
            axios.get('http://localhost:5000/api/skills'),
            axios.get('http://localhost:5000/api/personal')
        ])

        skills.value = resSkill.data
        personal.value = resPersonal.data
    } catch (err) {
        console.error("Lỗi tải dữ liệu:", err)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchData()
})
</script>

<style scoped>
.skills-page {
    background: #f8fafc;
    min-height: 100vh;
}

/* Header */
.page-header {
    background: linear-gradient(135deg, #ffffff, #f1f5f9);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
}

.text-gradient-primary,
.text-gradient-info {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Loading */
.loading-state {
    animation: fadeIn 0.4s ease;
}

.spinner-border {
    width: 3rem;
    height: 3rem;
}

/* Lists */
.stack-list>*:not(:last-child) {
    margin-bottom: 1rem;
}

.experience-stack>*:not(:last-child) {
    margin-bottom: 1.25rem;
}

/* Timeline */
.modern-timeline {
    padding-left: 0.5rem;
}

/* Empty */
.empty-state {
    animation: fadeIn 0.5s ease;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
