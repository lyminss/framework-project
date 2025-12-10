<template>
    <div class="container py-3">

        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold mb-0">Dự án đã làm</h2>
            <span class="badge bg-primary fs-6">{{ projects.length }} dự án</span>
        </div>

        <div class="row g-4">
            <div v-for="p in projects" :key="p._id" class="col-md-6 col-lg-4">
                <div class="project-card shadow-sm h-100 overflow-hidden">

                    <!-- Ảnh -->
                    <div class="project-img-box">
                        <img :src="p.imageUrl" alt="project cover">
                    </div>

                    <div class="p-3">

                        <h5 class="fw-bold mb-3">{{ p.title }}</h5>

                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-people text-primary me-2"></i>
                            <small>Team: <strong>{{ p.teamSize }} người</strong></small>
                        </div>

                        <!-- Công nghệ -->
                        <div class="mb-2">
                            <small class="text-muted">Công nghệ:</small>
                            <div class="mt-1">
                                <span v-for="tech in p.technologies" :key="tech"
                                    class="badge bg-light text-dark border me-1 mb-1">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <small class="text-muted">Thời gian:</small>
                            <div>
                                {{ new Date(p.startDate).toLocaleDateString() }} -
                                {{ new Date(p.endDate).toLocaleDateString() }}
                            </div>
                        </div>

                        <a href="https://github.com/lyminss/framework-project.git"
                            class="btn btn-sm btn-outline-primary w-100">
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="projects.length === 0" class="text-center mt-5">
            <i class="bi bi-inboxes text-muted fs-1"></i>
            <p class="text-muted mt-2">Chưa có dự án nào</p>
        </div>
    </div>
</template>

<style>
.project-card {
    border-radius: 10px;
    background: #fff;
    transition: .25s;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

/* Khung ảnh */
.project-img-box {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}

.project-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
}

.project-card:hover img {
    transform: scale(1.06);
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Project } from '../models/types'

const projects = ref<Project[]>([])

onMounted(async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/projects')
        projects.value = res.data
    } catch (error) {
        console.error("Lỗi tải dữ liệu dự án:", error)
    }
})
</script>