<template>
    <div class="container py-3">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-bold mb-0">Dự án đã làm</h2>
            <span class="badge bg-primary fs-6">{{ projects.length }} dự án</span>
        </div>

        <div class="row g-4">
            <ProjectCard v-for="p in projects" :key="p._id" :project="p" />
        </div>

        <div v-if="projects.length === 0" class="text-center mt-5">
            <i class="bi bi-inboxes text-muted fs-1"></i>
            <p class="text-muted mt-2">Chưa có dự án nào</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
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