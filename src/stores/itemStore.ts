import type { Item, Filters } from '@/types/common';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemStore = defineStore('itemStore', () => {
  const itemList = ref<Item[]>([]); // 商品一覧データ
  const setItemList = (newItemList: Item[]) => {
    itemList.value = newItemList;
  };

  const viewMode = ref<string>('grid'); // 表示モード
  const setViewMode = (newViewMode: string) => {
    viewMode.value = newViewMode;
  };

  const filters = ref<Filters>({
    limit: 10,
    category: '',
    artist: '',
    group: '',
    stores: [],
  }); // 絞り込み
  const updateFilters = (newFilters: Filters) => {
    filters.value = newFilters;
  };

  return {
    itemList,
    viewMode,
    filters,
    setItemList,
    setViewMode,
    updateFilters,
  };
});
