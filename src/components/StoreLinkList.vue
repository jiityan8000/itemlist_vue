<template>
  <ul class="StoreLinkList">
    <li v-for="store in storeList">
      <a :href="'#' + store.value">
        {{ store.name }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType } from 'vue';
import type { Store } from '@/types/common';

export default {
  props: {
    storeList: {
      type: Array as PropType<Store[]>,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
  gap: 10px;

  li {
    list-style: none;

    a {
      background: #000;
      color: #fff;
      padding: 5px 10px;
      text-decoration: none;
      border-radius: 5px;
    }
  }
}
</style>