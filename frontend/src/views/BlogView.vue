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
    <h2 class="text-center mb-4">Bài viết & Chia sẻ</h2>
    <div class="row">
        <div v-for="blog in blogs" :key="blog._id" class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://via.placeholder.com/150"
                            class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ blog.title }}</h5>
                            <p class="card-text text-truncate">{{ blog.content }}</p>
                            <RouterLink :to="'/blog/' + blog._id" class="btn btn-sm btn-outline-primary">
                                Đọc tiếp
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>