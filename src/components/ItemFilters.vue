<template>
  <div class="isPC">
    <FilterForm :limitList="limitList" :categoryList="categoryList" :artistList="artistList" :storeList="storeList" :monthList="monthList" :filters="filters" @update:filters="updateFilters" />
  </div>

  <div class="isSP">
    <button @click="openModal">絞り込み</button>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          絞り込み
        </div>
        <div class="modal-body">
          <FilterForm :limitList="limitList" :categoryList="categoryList" :artistList="artistList" :storeList="storeList" :monthList="monthList" :filters="filters" @update:filters="updateFilters" />
        </div>
        <button class="modal-search" @click="closeModal">絞り込む</button>
      </div>
      <button class="modal-close" @click="closeModal">×</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { Filters, Category, Artist, Month, Store } from '@/types/common';
import FilterForm from '@/components/FilterForm.vue';

export default {
  components: {
    FilterForm,
  },
  props: {
    limitList: {
      type: Array as () => number[],
      required: true
    },
    categoryList: {
      type: Array as () => Category[],
      required: true
    },
    artistList: {
      type: Array as () => Artist[],
      required: true
    },
    storeList: {
      type: Array as () => Store[],
      required: true
    },
    monthList: {
      type: Array as () => Month[],
      required: true
    },
    filters: {
      type: Object as () => Filters,
      required: true,
    }
  },
  setup(props, { emit }) {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const updateFilters = () => {
      emit('update:filters', { ...props.filters });
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
      updateFilters,
    };
  },
};
</script>

<style scoped>
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
  width: 100%;
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

.modal-close {
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