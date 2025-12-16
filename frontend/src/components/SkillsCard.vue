<template>
    <div class="card skill-card" :class="cardClass">
        <!-- Header -->
        <div class="card-header skill-card-header">
            <div>
                <h5 class="skill-card-title">
                    {{ title }}
                </h5>
                <p v-if="subtitle" class="skill-card-subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>

        <!-- Body -->
        <div class="card-body skill-card-body">
            <slot>
                <div class="text-center py-4">
                    <i :class="emptyIcon" class="text-muted fs-3 mb-2"></i>
                    <p class="text-muted small mb-0">
                        {{ emptyText }}
                    </p>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    title: string
    subtitle: string
    type: 'hard' | 'soft' | 'education' | 'experience'
    cardClass?: string
    emptyText?: string
}>(), {
    cardClass: '',
    emptyText: 'Chưa có dữ liệu'
})

const iconConfig = computed(() => {
    const config = {
        hard: { emptyIcon: 'bi-tools' },
        soft: { emptyIcon: 'bi-chat-dots' },
        education: { emptyIcon: 'bi-mortarboard' },
        experience: { emptyIcon: 'bi-briefcase' }
    }
    return config[props.type] || config.hard
})

const emptyIcon = computed(() => iconConfig.value.emptyIcon)
</script>


<style scoped>
.skill-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: none;
}

/* Header */
.skill-card-header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
    background: #ffffff;
}

/* Title */
.skill-card-title {
    font-size: 24px;
    font-weight: bold;
    color: #111827;
    margin: 0;
}

/* Subtitle */
.skill-card-subtitle {
    font-size: 0.8rem;
    color: #6b7280;
    margin: 0.25rem 0 0;
}

/* Body */
.skill-card-body {
    padding: 1.25rem;
}
</style>
