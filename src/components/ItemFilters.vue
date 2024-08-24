<template>
  <div class="isPC">
    <FilterForm />
  </div>

  <div class="isSP">
    <Modal>
      <template #open-btn="{ openModal }">
        <button @click="openModal">絞り込み</button>
      </template>
      <template #modal-header>絞り込み</template>
      <template #modal-body>
        <FilterForm />
      </template>
      <template #close-btn="{ closeModal }">
        <button @click="closeModal">絞り込む</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import FilterForm from '@/components/FilterForm.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    FilterForm,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .isSP {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .isPC {
    display: none;
  }
}
</style>