<template>
  <div class="itemDetailPage">
    <h1>商品詳細</h1>
    <p>
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="price"></slot>
    </p>
    <p>
      {{ dayjs(saleStartDate).format("YYYY-MM-DD") }}発売
    </p>
    <p>
      <slot name="stores"></slot>
    </p>
    <p>
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'

export default {
  props: {
    saleStartDate: {
      type: String,
      required: false
    },
  },
  setup() {
    return {
      dayjs
    };
  }
};
</script>

<style lang="scss" scoped></style>