<template>
    <div v-if="personalInfo" class="container-fluid min-vh-100 bg-light">

        <section class="hero-section bg-gradient-primary text-white pt-4 pb-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-2 text-center mb-3 mb-md-0">
                        <img :src="personalInfo.avatar" :alt="personalInfo.fullName"
                            class="avatar-img rounded-circle border-3 border-white">
                    </div>
                    <div class="col-md-10">
                        <h1 class="h4 fw-bold mb-1">{{ personalInfo.fullName }}</h1>
                        <p class="mb-2 small opacity-90">{{ personalInfo.introduction }}</p>
                        <div class="d-flex gap-2">
                            <span class="badge bg-white text-dark px-2 py-1 small">Developer</span>
                            <span class="badge bg-white bg-opacity-25 px-2 py-1 small">Backend</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container py-4">
            <div class="row g-4">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="d-flex align-items-center">
                            <div class="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                <i class="bi bi-person-circle text-primary fs-3"></i>
                            </div>
                            <div>
                                <h2 class="fw-bold mb-1">Về bản thân tôi</h2>
                                <p class="text-muted mb-0">Thông tin cá nhân và chuyên môn</p>
                            </div>
                        </div>
                    </div>

                    <!--information-->
                    <div class="col-12">
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-4">
                                <div class="bg-white rounded p-4 shadow-sm border h-100">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                            <i class="bi bi-person text-primary"></i>
                                        </div>
                                        <h6 class="fw-bold mb-0 text-primary">Họ tên</h6>
                                    </div>
                                    <p class="fw-bold mb-0 fs-5">{{ personalInfo.fullName }}</p>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="col-md-6 col-lg-4">
                                <div class="bg-white rounded p-4 shadow-sm border h-100">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                                            <i class="bi bi-envelope text-success"></i>
                                        </div>
                                        <h6 class="fw-bold mb-0 text-success">Email</h6>
                                    </div>
                                    <p class="fw-bold mb-0">{{ personalInfo.email || 'Chưa cập nhật' }}</p>
                                </div>
                            </div>

                            <div v-if="personalInfo.phone" class="col-md-6 col-lg-4">
                                <div class="bg-white rounded p-4 shadow-sm border h-100">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="bg-info bg-opacity-10 p-2 rounded-circle me-3">
                                            <i class="bi bi-telephone text-info"></i>
                                        </div>
                                        <h6 class="fw-bold mb-0 text-info">Điện thoại</h6>
                                    </div>
                                    <p class="fw-bold mb-0">{{ personalInfo.phone }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class="bg-white rounded p-4 shadow-sm border">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                                        <i class="bi bi-chat-left-text text-warning"></i>
                                    </div>
                                    <h6 class="fw-bold mb-0 text-warning">Giới thiệu</h6>
                                </div>
                                <div class="p-3 bg-light rounded">
                                    <p class="mb-0">{{ personalInfo.introduction }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold mb-3 text-primary">
                                <i class="bi bi-mortarboard me-2"></i>Học vấn
                            </h5>
                            <div v-for="edu in personalInfo.education" :key="edu.school" class="mb-3">
                                <h6 class="fw-bold mb-1 small">{{ edu.school }}</h6>
                                <p class="text-muted mb-1 small">{{ edu.major }}</p>
                                <span class="badge bg-light text-dark border small">{{ edu.year }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold mb-3 text-success">
                                <i class="bi bi-tools me-2"></i>Kỹ năng
                            </h5>

                            <div v-if="skills.length == 0" class="text-center py-2">
                                <p class="text-muted small">Chưa có dữ liệu</p>
                            </div>

                            <div v-for="skill in skills" :key="skill._id" class="mb-3">
                                <div class="d-flex justify-content-between small mb-1">
                                    <span>{{ skill.name }}</span>
                                    <span class="fw-bold text-success">{{ skill.level }}%</span>
                                </div>
                                <div class="progress" style="height: 4px;">
                                    <div class="progress-bar bg-success" :style="{ width: skill.level + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="card-title fw-bold mb-0 text-warning">
                                    <i class="bi bi-briefcase me-2"></i>Dự án
                                </h5>
                                <router-link to="/projects" class="btn btn-sm btn-outline-warning">
                                    Xem tất cả
                                </router-link>
                            </div>

                            <div v-if="projects.length == 0" class="text-center py-2">
                                <p class="text-muted small">Chưa có dự án</p>
                            </div>

                            <div class="d-flex flex-column gap-2">
                                <div v-for="proj in projects" :key="proj._id">
                                    <div class="p-2 border-bottom">
                                        <!-- Tiêu đề dự án -->
                                        <div class="d-flex justify-content-between align-items-start mb-1">
                                            <h6 class="fw-bold mb-0 small text-truncate">{{ proj.title }}</h6>
                                            <span class="badge bg-warning bg-opacity-10 text-warning border-0 small">
                                                <i class="bi bi-star-fill me-1"></i>
                                            </span>
                                        </div>

                                        <p class="small text-muted mb-2 line-clamp-2">{{ proj.description }}</p>

                                        <div class="d-flex flex-wrap gap-1 mb-2">
                                            <span v-for="tech in proj.technologies.slice(0, 2)" :key="tech"
                                                class="badge bg-light text-dark border small">
                                                {{ tech }}
                                            </span>
                                            <span v-if="proj.technologies.length > 2"
                                                class="badge bg-light text-dark border small">
                                                +{{ proj.technologies.length - 2 }}
                                            </span>
                                        </div>

                                        <a href="https://github.com/lyminss/framework-project.git"
                                            class="btn btn-outline-primary btn-sm w-100 py-1 small">
                                            Chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- LOADING -->
    <div v-else class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2 text-muted small">Đang tải dữ liệu...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Personal, Skill, Project } from '../models/types'

const personalInfo = ref<Personal | null>(null)
const skills = ref<Skill[]>([])
const projects = ref<Project[]>([])

onMounted(async () => {
    try {
        const [resPersonal, resSkills, resProjects] = await Promise.all([
            axios.get('http://localhost:5000/api/personal'),
            axios.get('http://localhost:5000/api/skills'),
            axios.get('http://localhost:5000/api/projects')
        ])

        personalInfo.value = resPersonal.data
        skills.value = resSkills.data
        projects.value = resProjects.data

    } catch (error) {
        console.error("Lỗi tải dữ liệu:", error)
    }
})
</script>

<style scoped>
.hero-section {
    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%) !important;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 10px;
}

.avatar-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
}

/* Card Styles */
.card {
    border-radius: 6px;
}

.card-body {
    padding: 1rem;
}

/* Progress Bar */
.progress {
    border-radius: 2px;
    background-color: #f1f3f9;
}

.progress-bar {
    border-radius: 2px;
}

/* Dự án tiêu biểu - Tinh gọn */
.border-bottom {
    border-color: #e9ecef !important;
}

.text-truncate {
    max-width: 70%;
}

/* Badge Styles */
.badge {
    font-weight: 500;
    font-size: 0.7rem;
    padding: 0.25em 0.5em;
}

.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
}
</style>