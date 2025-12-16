<template>
    <div class="timeline-item position-relative mb-4">
        <!-- Dot -->
        <div class="timeline-dot"></div>

        <!-- Card -->
        <div class="timeline-card ms-5">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <h5 class="fw-bold mb-1 text-dark">
                        {{ education.school }}
                    </h5>
                    <p class="text-muted mb-2 d-flex align-items-center">
                        <i class="bi bi-book me-2 text-warning"></i>
                        {{ education.major }}
                    </p>
                </div>

                <span class="timeline-badge">
                    <i class="bi bi-calendar me-1"></i>
                    {{ education.year }}
                </span>
            </div>

            <div class="d-flex align-items-center mt-2">
                <i class="bi bi-award text-warning me-2 fs-5"></i>
                <small class="text-muted">
                    {{ education.year }}
                </small>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

interface Education {
    school: string;
    major: string;
    year: string;
}

const props = defineProps<{
    education: Education
}>()

</script>

<style scoped>
.timeline-item {
    position: relative;
    padding-left: 28px;
}

/* Card */
.timeline-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
}

.timeline-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* Dot */
.timeline-dot {
    position: absolute;
    left: 0;
    top: 28px;
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    border-radius: 50%;
    border: 3px solid #fff;
    z-index: 2;
    box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.15);
}

/* Line */
.timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 50px;
    bottom: -30px;
    width: 2px;
    background: linear-gradient(to bottom,
            rgba(245, 158, 11, 0.6),
            rgba(245, 158, 11, 0.05));
    z-index: 1;
}

/* Badge */
.timeline-badge {
    background: rgba(245, 158, 11, 0.12);
    color: #d97706;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 6px 14px;
    border-radius: 999px;
    white-space: nowrap;
}
</style>
