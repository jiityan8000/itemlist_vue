<template>
  <div class="itemListPage">
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot name="item-filters"></slot>
    <slot name="view-mode-select"></slot>
    <slot name="item-list"></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, watchEffect } from 'vue';
import axios from 'axios';
import { useItemStore } from '@/stores/itemStore';
import { useConfigStore } from '@/stores/configStore';

export default {
  setup() {
    const itemStore = useItemStore();
    const configStore = useConfigStore();

    // 商品取得
    const fetchItemList = async () => {
      try {
        const response = await axios.get(configStore.ITEM_LIST_ENDPOINT, {
          params: {
            limit: itemStore.filters.limit || undefined,
            ct: itemStore.filters.category || undefined,
            gl: itemStore.filters.artist || undefined,
            list: itemStore.filters.stores || undefined,
            gr: itemStore.filters.group || undefined,
          },
        });
        itemStore.setItemList(response.data.results);
      } catch (error) {
        console.error('Failed to fetch item list:', error);
      }
    };

    // マウント時に商品取得
    onMounted(fetchItemList);

    // 依存しているプロパティの変更を監視して商品取得を呼び出す
    watchEffect(() => {
      fetchItemList();
    });

    return {
      fetchItemList,
    };
  }
};
</script>

<style lang="scss" scoped></style>
