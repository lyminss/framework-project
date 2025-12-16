<template>
    <div class="col-sm-6 col-md-4">
        <div class="soft-skill-item border-0 bg-light rounded-3 p-3 text-center h-100">
            <h6 class="fw-semibold mb-0">{{ skill.name }}</h6>
            <small class="text-muted d-block mt-1">Level {{ skill.level }}</small>
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
.soft-skill-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.soft-skill-item:hover {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%) !important;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.2);
}


.soft-skill-item:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
}
</style>