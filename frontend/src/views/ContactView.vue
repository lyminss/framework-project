<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

const form = ref<HTMLFormElement | null>(null);

const isSending = ref(false);

const formData = ref({ name: '', email: '', message: '' })

const submitForm = () => {
    if (!form.value) return;

    isSending.value = true;

    emailjs.sendForm(
        'service_w1htb6v',
        'template_o6j4ijq',
        form.value,
        {
            publicKey: 'qLHZZflm3Neqet95v',
        }
    )
        .then(() => {
            alert('Đã gửi thông tin thành công!');
            formData.value = { name: '', email: '', message: '' };
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Gửi thất bại, vui lòng thử lại sau.');
        })
        .finally(() => {
            isSending.value = false;
        });
}
</script>

<template>
    <div class="container py-5 contact-wrapper">

        <div class="row g-5 align-items-center">

            <div class="col-md-6">
                <h2 class="fw-bold display-6 mb-3">🤝 Liên hệ hợp tác</h2>
                <p class="text-muted mb-4 fs-6">
                    Liên hệ để thảo luận về dự án hoặc cơ hội hợp tác cùng phát triển.
                </p>

                <div class="contact-box p-4 rounded-4 shadow-sm">
                    <h5 class="fw-bold mb-4"><i class="bi bi-person-lines-fill me-2"></i>Thông tin liên hệ</h5>

                    <div class="info-item">
                        <i class="bi bi-geo-alt text-primary icon"></i>
                        <div>
                            <small class="text-muted">Địa chỉ</small>
                            <p class="mb-0 fw-semibold">Đà Nẵng, Việt Nam</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="bi bi-envelope text-success icon"></i>
                        <div>
                            <small class="text-muted">Email</small>
                            <p class="mb-0 fw-semibold">nlydoanloc@gmail.com</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <i class="bi bi-telephone text-info icon"></i>
                        <div>
                            <small class="text-muted">Điện thoại</small>
                            <p class="mb-0 fw-semibold">0947033934</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-4 form-card rounded-4 shadow-sm">
                    <h3 class="fw-bold mb-4"><i class="bi bi-chat-left-text me-2"></i>Gửi tin nhắn</h3>

                    <form ref="form" @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label class="form-label fw-medium">Họ tên *</label>
                            <input name="user_name" v-model="formData.name" type="text" class="form-control form-modern"
                                placeholder="Nhập họ tên" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-medium">Email *</label>
                            <input name="user_email" v-model="formData.email" type="email"
                                class="form-control form-modern" placeholder="email@example.com" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-medium">Nội dung *</label>
                            <textarea name="message" v-model="formData.message" rows="4"
                                class="form-control form-modern" placeholder="Nhập nội dung..." required></textarea>
                        </div>

                        <button type="submit" class="btn contact-btn w-100 py-2" :disabled="isSending">
                            <span v-if="isSending" class="spinner-border spinner-border-sm me-2"></span>
                            <span v-if="!isSending"><i class="bi bi-send me-2"></i>Gửi liên hệ</span>
                            <span v-else>Đang gửi...</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.contact-wrapper {
    animation: fadeIn .5s ease;
}

.contact-box {
    background: #ffffff;
    border-left: 4px solid var(--bs-primary);
}

.info-item {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 18px;
    padding-left: 6px;
}

.info-item .icon {
    font-size: 1.4rem;
}

.form-card {
    background: #fff;
}

.form-modern {
    border-radius: 10px;
    padding: 10px 14px;
    border: 1px solid #ddd;
    transition: .25s;
}

.form-modern:focus {
    border-color: var(--bs-primary);
    box-shadow: 0 0 0 3px rgba(13, 110, 253, .15);
}

.contact-btn {
    background: linear-gradient(135deg, var(--bs-primary), #4d9fff);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    transition: .3s;
}

.contact-btn:hover {
    filter: brightness(.92);
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>