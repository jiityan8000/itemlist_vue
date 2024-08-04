<template>
  <div>
    <button @click="setViewMode('grid')" :class="{ active: viewMode === 'grid' }">グリッド表示</button>
    <button @click="setViewMode('list')" :class="{ active: viewMode === 'list' }">1列表示</button>
  </div>
</template>

<script>
export default {
  props: {
    viewMode: {
      type: String,
      required: true
    }
  },
  methods: {
    setViewMode(mode) {
      this.$emit('update:viewMode', mode);
    }
  }
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
