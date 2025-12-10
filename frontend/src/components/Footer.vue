<template>
    <footer class="footer-section mt-auto">

        <div class="bg-light py-5 border-top">
            <div class="container">
                <div class="row g-4 align-items-start">

                    <div class="col-md-6 col-lg-3">
                        <h6 class="fw-bold text-dark mb-3">
                            <i class="bi bi-person-lines-fill text-primary me-2"></i>Thông tin liên hệ
                        </h6>

                        <div class="d-flex align-items-center mb-3">
                            <div class="contact-icon bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                                <i class="bi bi-envelope text-primary small"></i>
                            </div>
                            <div>
                                <small class="text-muted d-block">Email</small>
                                <span class="fw-medium">nlydoanloc@gmail.com</span>
                            </div>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="contact-icon bg-success bg-opacity-10 rounded-circle p-2 me-2">
                                <i class="bi bi-telephone text-success small"></i>
                            </div>
                            <div>
                                <small class="text-muted d-block">Điện thoại</small>
                                <span class="fw-medium">0947033934</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <h6 class="fw-bold text-dark mb-3">
                            <i class="bi bi-lightning-charge text-warning me-2"></i>Liên kết nhanh
                        </h6>
                        <ul class="list-unstyled footer-links">
                            <li><router-link to="/" class="footer-link">Trang chủ</router-link></li>
                            <li><router-link to="/contact" class="footer-link">Liên hệ</router-link></li>
                            <li><router-link to="/blog" class="footer-link">Blog & Chia sẻ</router-link></li>
                        </ul>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <h6 class="fw-bold text-dark mb-3">
                            <i class="bi bi-compass text-info me-2"></i>Khám phá
                        </h6>
                        <ul class="list-unstyled footer-links">
                            <li><router-link to="/projects" class="footer-link">Dự án đã làm</router-link></li>
                            <li><router-link to="/skills" class="footer-link">Kỹ năng chuyên môn</router-link></li>
                        </ul>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <h6 class="fw-bold text-dark mb-3">
                            <i class="bi bi-share-fill text-primary me-2"></i>Mạng xã hội
                        </h6>
                        <div class="d-flex gap-3">
                            <a href="#" class="social-link d-flex align-items-center text-decoration-none">
                                <div class="social-icon-wrapper bg-facebook rounded-circle p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                        fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                                <span class="social-text ms-2">Facebook</span>
                            </a>

                            <a href="#" class="social-link d-flex align-items-center text-decoration-none">
                                <div class="social-icon-wrapper rounded-circle p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                        fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </div>
                                <span class="social-text ms-2">GitHub</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="bg-gradient-primary py-3">
            <div class="container">
                <div class="align-items-center">
                    <p class="mb-0 text-white opacity-90 text-center">
                        <i class="bi bi-c-circle me-1"></i>2025 Copyright: My Portfolio
                    </p>
                </div>
            </div>
        </div>

    </footer>
</template>


<style scoped>
.footer-link {
    display: block;
    padding: 3px 0;
    color: #333;
    text-decoration: none;
    font-size: 0.925rem;
    transition: .25s;
}

.footer-link:hover {
    color: #0d6efd;
    padding-left: 4px;
}


.footer-section {
    margin-top: auto;
}

/* Social Icon Colors */

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
    width: 50px;
    height: 50px;
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