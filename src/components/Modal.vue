<template>
  <slot name="open-btn" :openModal="openModal"></slot>
  <Transition>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div v-if="$slots['modal-header']" class="modal-header">
          <slot name="modal-header"></slot>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <slot name="close-btn" :closeModal="closeModal"></slot>
      </div>
      <button class="close-icon" @click="closeModal">×</button>
    </div>
  </Transition>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
/* トランジション */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 90%;
  cursor: initial;
}

.modal-header {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal-body {
  font-size: 1rem;
  margin-bottom: 20px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 3rem;
  line-height: 1;
  color: #fff;
}

.modal-search {
  cursor: pointer;
}
</style>