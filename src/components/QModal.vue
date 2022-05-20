<script setup lang="ts">
interface Props {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);

const popup = ref<HTMLElement>();

watchEffect(() => {
  if (props.modelValue) focusAtPopup();
});

function closePopup(): void {
  emit("update:modelValue", false);
}

function focusAtPopup(): void {
  setTimeout(() => {
    if (popup.value) popup.value.focus();
  }, 100);
}

onMounted(() => {
  if (props.modelValue) focusAtPopup();
});
</script>

<template>
  <div v-if="props.modelValue" class="ui-popup-block" @mousedown="closePopup">
    <div relative @mousedown.stop @keydown.esc="closePopup" class="ui-popup" ref="popup" tabindex="0" >
       <button absolute top-0 right-10px text="24px" fw-600 @click="closePopup">×</button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ui-popup-block {
  /* background-color: rgba(162, 153, 40, 0.1); */
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-popup {
  position: relative;
  background-color: #fff;
  padding: 25px 30px 30px;
  /* max-width: 380px; */
  border-radius: 8px;
  outline: none;
}
</style>