<template>
  <div>
    <button @click="itemStore.setViewMode('grid')" :class="{ active: itemStore.viewMode === 'grid' }">グリッド表示</button>
    <button @click="itemStore.setViewMode('list')" :class="{ active: itemStore.viewMode === 'list' }">1列表示</button>
  </div>
</template>

<script lang="ts">
import { useItemStore } from '@/stores/itemStore';
import { useConfigStore } from '@/stores/configStore';

export default {
  setup() {
    const itemStore = useItemStore();
    const configStore = useConfigStore();

    return {
      itemStore,
      configStore,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  &.active {
    background: #000;
    color: #fff;
  }
}
</style>
