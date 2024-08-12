<template>
  <div>
    <button @click="setViewMode('grid')" :class="{ active: viewMode === 'grid' }">グリッド表示</button>
    <button @click="setViewMode('list')" :class="{ active: viewMode === 'list' }">1列表示</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    viewMode: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const setViewMode = (mode: string) => {
      emit('update:viewMode', mode);
    };

    return {
      setViewMode,
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
