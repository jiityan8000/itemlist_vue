<template>
  <div class="itemDetailPage">
    <h1>商品詳細</h1>
    <CategoryList>テスト</CategoryList>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      required: true
    },
    viewMode: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>