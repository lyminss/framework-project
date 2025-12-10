<template>
    <div v-if="info" class="container-fluid p-0">
        <section class="about-hero bg-light py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 text-center mb-4 mb-md-0">
                        <div class="avatar-wrapper">
                            <img :src="info.avatar" :alt="info.fullName" class="avatar-img rounded-circle shadow-lg">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="hero-content">
                            <h6 class="text-primary mb-2 fw-semibold">GIỚI THIỆU</h6>
                            <h1 class="display-5 fw-bold mb-3">{{ info.fullName }}</h1>
                            <p class="lead text-secondary mb-4">{{ info.introduction }}</p>
                            <div class="d-flex flex-wrap gap-3">
                                <RouterLink to="/contact" class="btn btn-outline-primary btn-lg px-4">Liên hệ
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container py-5">
            <div class="row g-4">
                <!-- Thông tin cá nhân -->
                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-header bg-white border-0 pt-4">
                            <div class="d-flex align-items-center">
                                <div class="header-icon bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                                    <i class="bi bi-person-badge text-primary fs-4"></i>
                                </div>
                                <div>
                                    <h2 class="fw-bold mb-1">Thông tin cá nhân</h2>
                                    <p class="text-muted small mb-0">Chi tiết thông tin liên hệ</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="list-group list-group-flush">
                                <div class="list-group-item border-0 px-0 py-3">
                                    <div class="d-flex align-items-center">
                                        <div class="list-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                            <i class="bi bi-person text-primary"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <small class="text-muted d-block">Họ tên</small>
                                            <span class="fw-bold fs-5">{{ info.fullName }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="list-group-item border-0 px-0 py-3">
                                    <div class="d-flex align-items-center">
                                        <div class="list-icon bg-success bg-opacity-10 rounded-circle p-2 me-3">
                                            <i class="bi bi-envelope text-success"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <small class="text-muted d-block">Email</small>
                                            <span class="fw-bold fs-5">{{ info.email || 'Chưa cập nhật' }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="info.phone" class="list-group-item border-0 px-0 py-3">
                                    <div class="d-flex align-items-center">
                                        <div class="list-icon bg-info bg-opacity-10 rounded-circle p-2 me-3">
                                            <i class="bi bi-telephone text-info"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <small class="text-muted d-block">Điện thoại</small>
                                            <span class="fw-bold fs-5">{{ info.phone }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 pt-4 border-top">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="list-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                        <i class="bi bi-chat-square-text text-primary"></i>
                                    </div>
                                    <h5 class="fw-bold mb-0">Giới thiệu</h5>
                                </div>
                                <div class="p-3 bg-light rounded">
                                    <p class="mb-0">{{ info.introduction }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-header bg-white border-0 pt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <div class="header-icon bg-success bg-opacity-10 rounded-circle p-3 me-3">
                                        <i class="bi bi-images text-success fs-4"></i>
                                    </div>
                                    <div>
                                        <h2 class="fw-bold mb-1">Hình ảnh hoạt động</h2>
                                        <p class="text-muted small mb-0">Dự án và hoạt động chuyên môn</p>
                                    </div>
                                </div>
                                <RouterLink to="/projects" class="btn btn-sm btn-outline-success">
                                    Xem tất cả dự án
                                </RouterLink>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-8">
                                    <div class="gallery-item rounded overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                                            class="img-fluid w-100 h-100 object-fit-cover" alt="Coding Activity">
                                        <div class="gallery-caption">
                                            <small class="text-white">Development</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="gallery-item rounded overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=500&fit=crop"
                                            class="img-fluid w-100 h-100 object-fit-cover" alt="Team Work">
                                        <div class="gallery-caption">
                                            <small class="text-white">Team Work</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="gallery-item rounded overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=300&h=300&fit=crop"
                                            class="img-fluid w-100 h-100 object-fit-cover" alt="Meeting">
                                        <div class="gallery-caption">
                                            <small class="text-white">Meeting</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-8">
                                    <div class="gallery-item rounded overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop"
                                            class="img-fluid w-100 h-100 object-fit-cover" alt="Project Showcase">
                                        <div class="gallery-caption">
                                            <small class="text-white">Showcase</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Loading State -->
    <div v-else class="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div class="text-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3 text-muted fw-medium">Đang tải thông tin...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Personal } from '../models/types'

const info = ref<Personal | null>(null)

onMounted(async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/personal')
        info.value = res.data
    } catch (error) {
        console.error(error)
    }
})
</script>

<style scoped>
/* Hero Section */
.about-hero {
    background: linear-gradient(to right, #f8f9fa, #ffffff);
}

/* Avatar đơn giản */
.avatar-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 5px solid white;
}

.avatar-wrapper {
    position: relative;
    display: inline-block;
}

.status-indicator {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid white;
}

/* Card Styles */
.card {
    border-radius: 12px;
}

.card-header {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
}

.header-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Gallery */
.gallery-item {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.gallery-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-caption {
    opacity: 1;
}

/* Stats */
.stat-box {
    transition: transform 0.2s ease;
}

.stat-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Social Links */
.social-link {
    width: 45px;
    height: 45px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.2s ease;
}

.social-link:hover {
    background: #e9ecef;
    transform: translateY(-3px);
}
</style>