<template>
    <div v-if="personal" class="container-fluid py-4">
        <div class="row g-4">
            <!-- LEFT COLUMN - SKILLS -->
            <div class="col-lg-6">
                <!-- Hard Skills Section -->
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-header bg-white border-0 pt-4">
                        <div class="d-flex align-items-center">
                            <div class="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                <i class="bi bi-tools text-primary fs-4"></i>
                            </div>
                            <div>
                                <h3 class="card-title fw-bold mb-1">Kỹ năng chuyên môn</h3>
                                <p class="text-muted mb-0 small">Hard Skills</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div v-if="hardSkills.length === 0" class="text-center py-4">
                            <i class="bi bi-inboxes text-muted fs-1 mb-3"></i>
                            <p class="text-muted">Chưa có dữ liệu kỹ năng</p>
                        </div>

                        <div v-for="skill in hardSkills" :key="skill._id" class="mb-4">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="fw-medium">{{ skill.name }}</span>
                                <span class="fw-bold text-primary">{{ skill.level }}%</span>
                            </div>
                            <div class="progress" style="height: 8px;">
                                <div class="progress-bar bg-gradient-primary" :style="{ width: skill.level + '%' }"
                                    role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Soft Skills Section -->
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white border-0 pt-4">
                        <div class="d-flex align-items-center">
                            <div class="icon-wrapper bg-success bg-opacity-10 rounded-circle p-3 me-3">
                                <i class="bi bi-people text-success fs-4"></i>
                            </div>
                            <div>
                                <h3 class="card-title fw-bold mb-1">Kỹ năng mềm</h3>
                                <p class="text-muted mb-0 small">Soft Skills</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div v-if="softSkills.length === 0" class="text-center py-4">
                            <i class="bi bi-inboxes text-muted fs-1 mb-3"></i>
                            <p class="text-muted">Chưa có dữ liệu kỹ năng</p>
                        </div>

                        <div class="row g-2">
                            <div v-for="skill in softSkills" :key="skill._id" class="col-sm-6 col-md-4">
                                <div class="border rounded p-3 text-center bg-light">
                                    <i class="bi bi-check-circle-fill text-success fs-4 mb-2"></i>
                                    <p class="fw-medium mb-0 small">{{ skill.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN - EDUCATION & EXPERIENCE -->
            <div class="col-lg-6">
                <!-- Education Section -->
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-header bg-white border-0 pt-4">
                        <div class="d-flex align-items-center">
                            <div class="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-3 me-3">
                                <i class="bi bi-mortarboard text-warning fs-4"></i>
                            </div>
                            <div>
                                <h3 class="card-title fw-bold mb-1">Học vấn</h3>
                                <p class="text-muted mb-0 small">Education & Qualifications</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div v-if="personal.education.length === 0" class="text-center py-4">
                            <i class="bi bi-mortarboard text-muted fs-1 mb-3"></i>
                            <p class="text-muted">Chưa có thông tin học vấn</p>
                        </div>

                        <div class="timeline">
                            <div v-for="(edu, index) in personal.education" :key="index"
                                class="timeline-item position-relative mb-4">
                                <div class="timeline-dot bg-warning border border-white"></div>
                                <div class="ms-4">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <h5 class="fw-bold mb-1">{{ edu.school }}</h5>
                                        <span class="badge bg-warning bg-opacity-10 text-warning border-0">
                                            {{ edu.year }}
                                        </span>
                                    </div>
                                    <p class="text-muted mb-2">{{ edu.major }}</p>
                                    <p class="small text-muted mb-0">
                                        <i class="bi bi-award me-1"></i>Đang theo học
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Experience Section -->
                <div class="card border-0 shadow-sm">
                    <div class="card-header bg-white border-0 pt-4">
                        <div class="d-flex align-items-center">
                            <div class="icon-wrapper bg-info bg-opacity-10 rounded-circle p-3 me-3">
                                <i class="bi bi-briefcase text-info fs-4"></i>
                            </div>
                            <div>
                                <h3 class="card-title fw-bold mb-1">Kinh nghiệm làm việc</h3>
                                <p class="text-muted mb-0 small">Work Experience</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-start py-4">
                            <i class="bi bi-briefcase text-muted fs-1 mb-3"></i>
                            <div class="ms-4">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div v-for="exp in personal.experience" :key="exp.company" class="mb-3">
                                        <h6 class="">{{ exp.position
                                        }}</h6>
                                        <p class="text-muted mb-1">{{ exp.description }}</p>
                                        <span class="badge bg-warning bg-opacity-10 text-warning border-0">Thời hạn: {{
                                            exp.duration }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import type { Skill, Personal } from '../models/types'

const skills = ref<Skill[]>([])
const personal = ref<Personal | null>(null)

// Tách kỹ năng cứng và mềm
const hardSkills = computed(() => skills.value.filter(s => s.type === 'hard'))
const softSkills = computed(() => skills.value.filter(s => s.type === 'soft'))

onMounted(async () => {
    try {
        const [resSkill, resPersonal] = await Promise.all([
            axios.get('http://localhost:5000/api/skills'),
            axios.get('http://localhost:5000/api/personal')
        ])
        skills.value = resSkill.data
        personal.value = resPersonal.data
    } catch (error) {
        console.error("Lỗi tải dữ liệu:", error)
    }
})
</script>

<style scoped>
.timeline {
    position: relative;
}

.timeline-item {
    padding-left: 24px;
}

.timeline-dot {
    position: absolute;
    left: 0;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 2;
}

.timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 20px;
    bottom: -20px;
    width: 2px;
    background-color: #e9ecef;
    z-index: 1;
}

.progress-bar.bg-gradient-primary {
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
}

.bg-light:hover {
    background-color: #f8f9fa !important;
    transform: translateY(-2px);
    transition: all 0.2s ease;
}

.icon-wrapper {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>