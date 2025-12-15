<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const activeLink = ref('/')

// theo dõi route hiện tại để cập nhật trạng thái active
watchEffect(() => {
    activeLink.value = route.path
})

// hàm kiểm tra xem link có đang active không
const isActive = (path: string) => {
    return activeLink.value === path ||
        (path !== '/' && activeLink.value.startsWith(path))
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary sticky-top shadow-sm">
        <div class="container">
            <RouterLink class="navbar-brand d-flex align-items-center fw-bold" to="/">
                <span class="brand-text">My Portfolio</span>
            </RouterLink>

            <button class="navbar-toggler border-0 focus-shadow" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/"
                            :class="{ 'active fw-bold': isActive('/') }">
                            Trang chủ
                            <span v-if="isActive('/')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/about"
                            :class="{ 'active fw-bold': isActive('/about') }">
                            Giới thiệu
                            <span v-if="isActive('/about')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/skills"
                            :class="{ 'active fw-bold': isActive('/skills') }">
                            Kỹ năng & HS
                            <span v-if="isActive('/skills')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/projects"
                            :class="{ 'active fw-bold': isActive('/projects') }">
                            Dự án
                            <span v-if="isActive('/projects')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/blog"
                            :class="{ 'active fw-bold': isActive('/blog') }">
                            Blog
                            <span v-if="isActive('/blog')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link position-relative px-3 py-2 mx-1 rounded" to="/contact"
                            :class="{ 'active fw-bold': isActive('/contact') }">
                            Liên hệ
                            <span v-if="isActive('/contact')"
                                class="position-absolute bottom-0 start-50 translate-middle-x active-indicator"></span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.bg-gradient-primary {
    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%) !important;
}

.active-indicator {
    display: block;
    width: 6px;
    height: 6px;
    background-color: #20c997;
    border-radius: 50%;
    margin-bottom: -8px;
}

.nav-link {
    transition: all 0.2s ease;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
}

.nav-link.active {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.15);
}

.focus-shadow:focus {
    box-shadow: 0 0 0 0.25rem rgba(32, 201, 151, 0.25) !important;
}

.navbar {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

@media (max-width: 992px) {
    .nav-link {
        margin: 0.25rem 0;
    }

    .active-indicator {
        display: none;
    }
}
</style>