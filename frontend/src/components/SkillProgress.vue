<template>
    <div class="skill-item mb-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-primary me-2"></i>
                <span class="fw-semibold">{{ skill.name }}</span>
            </div>
            <span class="fw-bold text-primary">{{ skill.level }}%</span>
        </div>
        <div class="progress" style="height: 10px; border-radius: 5px;">
            <div class="progress-bar bg-gradient-primary" :style="{ width: skill.level + '%' }" role="progressbar">
                <span class="progress-label">{{ skill.level }}%</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '../models/types'

const props = defineProps<{
    skill: Skill
}>()
</script>

<style scoped>
.skill-item {
    transition: transform 0.2s ease;
}

.skill-item:hover {
    transform: translateX(5px);
}

.progress-bar {
    position: relative;
    border-radius: 5px;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-label {
    position: absolute;
    right: 5px;
    top: -20px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #667eea;
}
</style>