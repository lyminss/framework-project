<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

// 1. Tạo biến tham chiếu đến thẻ <form> trong HTML
const form = ref<HTMLFormElement | null>(null);

// Biến quản lý trạng thái đang gửi
const isSending = ref(false);

// Dữ liệu form (Dùng để reset sau khi gửi xong)
const formData = ref({ name: '', email: '', message: '' })

const submitForm = () => {
    // Kiểm tra form tồn tại
    if (!form.value) return;

    isSending.value = true; // Bật trạng thái đang gửi

    // 2. Gửi email qua EmailJS
    // Cú pháp: sendForm(serviceID, templateID, formElement, publicKey)
    emailjs.sendForm(
        'service_w1htb6v',  // <-- Thay Service ID của bạn vào đây
        'template_o6j4ijq', // <-- Thay Template ID của bạn vào đây
        form.value,
        {
            publicKey: 'qLHZZflm3Neqet95v', // <-- Thay Public Key của bạn vào đây
        }
    )
        .then(() => {
            alert('Đã gửi thông tin thành công!');
            // Reset form về rỗng
            formData.value = { name: '', email: '', message: '' };
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Gửi thất bại, vui lòng thử lại sau.');
        })
        .finally(() => {
            isSending.value = false; // Tắt trạng thái đang gửi dù thành công hay thất bại
        });
}
</script>

<template>
    <div class="container py-4">
        <div class="row g-4">
            <div class="col-md-6">
                <div class="p-4">
                    <h2 class="fw-bold mb-3">Liên hệ hợp tác</h2>
                    <p class="text-muted mb-4">Liên hệ để thảo luận về dự án hoặc cơ hội hợp tác</p>

                    <div class="mb-4">
                        <h5 class="fw-bold mb-3">Thông tin liên hệ</h5>
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-geo-alt text-primary me-3 fs-5"></i>
                            <div>
                                <small class="text-muted">Địa chỉ</small>
                                <p class="mb-0 fw-medium">Đà Nẵng, Việt Nam</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-envelope text-success me-3 fs-5"></i>
                            <div>
                                <small class="text-muted">Email</small>
                                <p class="mb-0 fw-medium">nlydoanloc@gmail.com</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="bi bi-telephone text-info me-3 fs-5"></i>
                            <div>
                                <small class="text-muted">Điện thoại</small>
                                <p class="mb-0 fw-medium">0947033934</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="border rounded p-4">
                    <h3 class="fw-bold mb-4">Gửi tin nhắn</h3>

                    <form ref="form" @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label class="form-label">Họ tên *</label>
                            <input name="user_name" v-model="formData.name" type="text" class="form-control"
                                placeholder="Nhập họ tên" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Email *</label>
                            <input name="user_email" v-model="formData.email" type="email" class="form-control"
                                placeholder="email@example.com" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Nội dung *</label>
                            <textarea name="message" v-model="formData.message" class="form-control" rows="4"
                                placeholder="Nhập nội dung..." required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-100 py-2" :disabled="isSending">
                            <span v-if="isSending" class="spinner-border spinner-border-sm me-2" role="status"
                                aria-hidden="true"></span>
                            <span v-if="!isSending"><i class="bi bi-send me-2"></i>Gửi liên hệ</span>
                            <span v-else>Đang gửi...</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>