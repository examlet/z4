<script setup lang="ts">
const props = defineProps({ 
    disabled: { type: Boolean, required: false },
})

const emit = defineEmits(["click"]);
</script>

<template>
    <button
        class="inline-block rounded tracking-wide transition-all h-32px px-20px leading-32px items-center fw700"
        bg="[#5c97ee] hover:[#91beff] active:[#3f85ed]" text="12px [#ffffff]" fw-700
        :disabled="props.disabled" @click="emit('click')"
    >
        <slot />
    </button>
</template>