<template>
  <ul :class="itemStore.viewMode">
    <li v-for="item in itemStore.itemList" :key="item.name">
      <a :href="'/detail/?cd=' + item.name">
        <div class="item_img"><img src="https://placehold.jp/500x500.png" :alt="item.name" /></div>
        <p class="item_name">{{ item.name }}</p>
      </a>
    </li>
  </ul>
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
ul {
  display: grid;
  padding: 0;
  gap: 20px;

  &.grid {
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  &.list {
    li {
      a {
        display: grid;
        grid-template-columns: 100px 1fr;
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  li {
    list-style: none;

    .item_img {
      img {
        width: 100%;
      }
    }
  }
}
</style>