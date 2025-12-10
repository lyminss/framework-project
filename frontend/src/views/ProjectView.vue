<template>
    <div class="container py-3">
        <!-- Header đơn giản -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold mb-0">Dự án đã làm</h2>
            <span class="badge bg-primary">{{ projects.length }} dự án</span>
        </div>

        <!-- Grid đơn giản -->
        <div class="row g-3">
            <div v-for="p in projects" :key="p._id" class="col-md-6 col-lg-4">
                <div class="border rounded p-3 h-100">
                    <!-- Tiêu đề -->
                    <h5 class="fw-bold mb-2">{{ p.title }}</h5>

                    <!-- Thông tin cơ bản -->
                    <div class="mb-3">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-people text-primary me-2"></i>
                            <small>Team: <strong>{{ p.teamSize }} người</strong></small>
                        </div>

                        <div class="mb-2">
                            <small class="text-muted">Công nghệ:</small>
                            <div class="mt-1">
                                <span v-for="tech in p.technologies" :key="tech"
                                    class="badge bg-light text-dark border me-1 mb-1">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div>
                            <small class="text-muted">Thời gian:</small>
                            <div>
                                {{ new Date(p.startDate).toLocaleDateString() }} -
                                {{ new Date(p.endDate).toLocaleDateString() }}
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <a href="#" class="btn btn-outline-primary btn-sm w-100">
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>

        <!-- Không có dự án -->
        <div v-if="projects.length === 0" class="text-center mt-5">
            <i class="bi bi-inboxes text-muted fs-1"></i>
            <p class="text-muted mt-2">Chưa có dự án nào</p>
        </div>
    </div>
</template>

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