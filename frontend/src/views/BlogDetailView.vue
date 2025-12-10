<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import type { Blog } from '../models/types'

const route = useRoute()
const blog = ref<Blog | null>(null)

onMounted(async () => {
    const id = route.params.id
    try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`)
        blog.value = res.data
    } catch (e) {
        console.error("Không tìm thấy bài viết")
    }
})
</script>

<template>
    <div v-if="blog" class="container mt-4">
        <h1 class="mb-3">{{ blog.title }}</h1>
        <p class="text-muted">Đăng ngày: 20/10/2025</p>
        <hr>
        <div class="content lh-lg">
            {{ blog.content }}
        </div>
        <RouterLink to="/blog" class="btn btn-secondary mt-4">← Quay lại</RouterLink>
    </div>
    <div v-else class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p>Đang tải bài viết...</p>
    </div>
</template>