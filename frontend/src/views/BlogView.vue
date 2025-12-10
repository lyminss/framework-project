<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
import type { Blog } from '../models/types'

const blogs = ref<Blog[]>([])

onMounted(async () => {
    const res = await axios.get('http://localhost:5000/api/blogs')
    blogs.value = res.data
})
</script>

<template>
    <div class="container py-5">

        <h2 class="text-center fw-bold display-6 mb-5">📝 Bài viết & Chia sẻ</h2>

        <div class="d-flex flex-column gap-4">
            <div v-for="blog in blogs" :key="blog._id"
                class="blog-row-card shadow-sm d-flex flex-row align-items-stretch">

                <!-- Ảnh bên trái -->
                <div class="thumb-box">
                    <img :src="blog.thumbnail" alt="">
                </div>

                <!-- Nội dung bên phải -->
                <div class="content flex-grow-1">
                    <h5 class="title">{{ blog.title }}</h5>
                    <p class="desc">{{ blog.content }}</p>

                    <RouterLink :to="'/blog/' + blog._id" class="btn-read">
                        Đọc tiếp →
                    </RouterLink>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.blog-row-card {
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    transition: .25s;
    gap: 18px;
    min-height: 180px;
}

.blog-row-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Thumbnail ngang */
.thumb-box {
    width: 220px;
    min-height: 180px;
    flex-shrink: 0;
    overflow: hidden;
}

.thumb-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
}

.blog-row-card:hover img {
    scale: 1.06;
}

/* Nội dung */
.content {
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 1.15rem;
}

.desc {
    color: #666;
    line-height: 1.45rem;
    flex-grow: 1;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
}

/* Button */
.btn-read {
    align-self: flex-start;
    font-size: 0.9rem;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid var(--bs-primary);
    color: var(--bs-primary);
    transition: .25s;
    text-decoration: none;
}

.btn-read:hover {
    background: var(--bs-primary);
    color: white;
}
</style>