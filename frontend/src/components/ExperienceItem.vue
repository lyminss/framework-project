<template>
    <div class="experience-item mb-4 pb-4" :class="{ 'border-bottom': !isLast }">
        <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
                <h6 class="fw-bold mb-1 text-dark">{{ experience.position }}</h6>
                <p class="text-muted mb-1">
                    <i class="bi bi-building me-1"></i>{{ experience.company }}
                </p>
            </div>
            <span class="badge bg-info bg-opacity-10 text-info border-0 px-3 py-2">
                <i class="bi bi-clock me-1"></i>{{ experience.duration }}
            </span>
        </div>
        <p class="text-muted mb-0">{{ experience.description }}</p>
    </div>
</template>

<script setup lang="ts">

interface Experience {
    company: string;
    position: string;
    description: string;
    duration: string;
}

const props = defineProps<{
    experience: Experience
    isLast?: boolean
}>()
</script>

<style scoped>
.experience-item {
    transition: all 0.3s ease;
    padding: 10px;
    border-radius: 8px;
}

.experience-item:hover {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    transform: translateX(5px);
    padding-left: 15px;
}

.border-bottom {
    border-bottom: 2px dashed #e5e7eb !important;
}
</style>