<template>
    <footer class="footer-section mt-auto">
        <!-- Thông tin liên hệ & Mạng xã hội -->
        <div class="bg-light py-4 border-top">
            <div class="container">
                <div class="row align-items-center g-4">
                    <!-- Thông tin liên hệ -->
                    <div class="col-lg-6">
                        <div class="contact-info">
                            <h6 class="fw-bold text-dark mb-3">
                                <i class="bi bi-person-lines-fill text-primary me-2"></i>Thông tin liên hệ
                            </h6>
                            <div class="d-flex flex-wrap gap-4">
                                <div class="d-flex align-items-center">
                                    <div class="contact-icon bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                                        <i class="bi bi-envelope text-primary small"></i>
                                    </div>
                                    <div>
                                        <small class="text-muted d-block">Email</small>
                                        <span class="fw-medium">contact@example.com</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="contact-icon bg-success bg-opacity-10 rounded-circle p-2 me-2">
                                        <i class="bi bi-telephone text-success small"></i>
                                    </div>
                                    <div>
                                        <small class="text-muted d-block">Điện thoại</small>
                                        <span class="fw-medium">+84 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mạng xã hội -->
                    <div class="col-lg-6">
                        <div class="social-links">
                            <h6 class="fw-bold text-dark mb-3">
                                <i class="bi bi-share-fill text-primary me-2"></i>Mạng xã hội
                            </h6>
                            <div class="d-flex gap-3">
                                <a href="#" class="social-link d-flex align-items-center text-decoration-none">
                                    <div class="social-icon-wrapper bg-facebook rounded-circle p-2 me-2">
                                        <i class="bi bi-facebook text-white"></i>
                                    </div>
                                    <span class="social-text">Facebook</span>
                                </a>
                                <a href="#" class="social-link d-flex align-items-center text-decoration-none">
                                    <div class="social-icon-wrapper bg-linkedin rounded-circle p-2 me-2">
                                        <i class="bi bi-linkedin text-white"></i>
                                    </div>
                                    <span class="social-text">LinkedIn</span>
                                </a>
                                <a href="#" class="social-link d-flex align-items-center text-decoration-none">
                                    <div class="social-icon-wrapper bg-dark rounded-circle p-2 me-2">
                                        <i class="bi bi-github text-white"></i>
                                    </div>
                                    <span class="social-text">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="bg-gradient-primary py-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <p class="mb-0 text-white opacity-90">
                            <i class="bi bi-c-circle me-1"></i>2025 Copyright: My Portfolio
                        </p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="d-flex justify-content-center justify-content-md-end gap-3">
                            <router-link to="/" class="text-white opacity-75 text-decoration-none small">
                                <i class="bi bi-house-door me-1"></i>Trang chủ
                            </router-link>
                            <router-link to="/contact" class="text-white opacity-75 text-decoration-none small">
                                <i class="bi bi-envelope me-1"></i>Liên hệ
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-section {
    margin-top: auto;
}

/* Social Icon Colors */
.bg-facebook {
    background-color: #1877f2;
}

.bg-linkedin {
    background-color: #0a66c2;
}

.bg-gradient-primary {
    background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%) !important;
}

/* Contact Info */
.contact-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-info small {
    font-size: 0.75rem;
}

.contact-info span {
    font-size: 0.9rem;
}

/* Social Links */
.social-icon-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}

.social-link:hover .social-icon-wrapper {
    transform: translateY(-2px);
}

.social-text {
    font-size: 0.9rem;
    color: #333;
    transition: color 0.2s ease;
}

.social-link:hover .social-text {
    color: var(--bs-primary);
}

/* Copyright Links */
.bg-gradient-primary a:hover {
    opacity: 1 !important;
}
</style>