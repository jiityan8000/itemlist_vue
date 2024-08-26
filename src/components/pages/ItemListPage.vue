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
import { useItemStore } from '@/stores/itemStore';
import { useConfigStore } from '@/stores/configStore';

export default {
  setup() {
    const itemStore = useItemStore();
    const configStore = useConfigStore();

    // 商品取得
    const fetchItemList = async () => {
      try {
        const params = new URLSearchParams({
          limit: itemStore.filters.limit?.toString() || '',
          ct: itemStore.filters.category || '',
          gl: itemStore.filters.artist || '',
          gr: itemStore.filters.group || '',
        });

        // 複数の 'list[]' パラメータを追加
        itemStore.filters.stores.forEach((store) => {
          params.append('list[]', store);
        });

        const response = await fetch(`${configStore.ITEM_LIST_ENDPOINT}?${params}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch item list: ${response.statusText}`);
        }

        const data = await response.json();
        itemStore.setItemList(data.results);
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
