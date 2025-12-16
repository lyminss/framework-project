<template>
    <div class="col-md-6 col-lg-4">
        <div class="project-card shadow-sm h-100 overflow-hidden">
            <!-- Ảnh -->
            <div class="project-img-box">
                <img :src="project.imageUrl" :alt="project.title">
            </div>

            <div class="p-3">
                <h5 class="fw-bold mb-3">{{ project.title }}</h5>

                <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-people text-primary me-2"></i>
                    <small>Team: <strong>{{ project.teamSize }} người</strong></small>
                </div>

                <!-- Công nghệ -->
                <div class="mb-2">
                    <small class="text-muted">Công nghệ:</small>
                    <div class="mt-1">
                        <span v-for="tech in project.technologies" :key="tech"
                            class="badge bg-light text-dark border me-1 mb-1">
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <div class="mb-3">
                    <small class="text-muted">Thời gian:</small>
                    <div>
                        {{ new Date(project.startDate).toLocaleDateString() }} -
                        {{ new Date(project.endDate).toLocaleDateString() }}
                    </div>
                </div>

                <a href="https://github.com/lyminss/framework-project.git" class="btn btn-sm btn-outline-primary w-100">
                    Xem chi tiết
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '../models/types'

const props = defineProps<{
    project: Project
}>()
</script>

<style scoped>
.project-card {
    border-radius: 10px;
    background: #fff;
    transition: .25s;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

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