<template>
  <div class="itemListPage">
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot name="item-filters" :filters="filters" :updateFilters="updateFilters"></slot>
    <slot name="view-mode-select" :viewMode="viewMode" :updateViewMode="updateViewMode"></slot>
    <slot name="item-list" :itemList="itemList" :viewMode="viewMode"></slot>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  props: {
    endpoint: {
      type: String,
      required: true
    },
    defaultViewMode: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const itemList = ref([]); // 商品一覧データ
    const viewMode = ref(props.defaultViewMode); // 表示モード
    const filters = ref({
      limit: 10,
      category: '',
      artist: '',
      group: '',
      stores: []
    }); // 絞り込み

    // 商品取得
    const fetchItemList = async () => {
      try {
        const response = await axios.get(props.endpoint, {
          params: {
            limit: filters.value.limit || undefined,
            ct: filters.value.category || undefined,
            gl: filters.value.artist || undefined,
            list: filters.value.stores || undefined,
            gr: filters.value.group || undefined,
          },
        });
        itemList.value = response.data.results;
      } catch (error) {
        console.error('Failed to fetch item list:', error);
      }
    };

    // 絞り込みを更新
    const updateFilters = (newFilters) => {
      filters.value = newFilters;
      fetchItemList();
    };

    // 表示モードを更新
    const updateViewMode = (newViewMode) => {
      viewMode.value = newViewMode;
    };

    // マウント時に商品取得
    onMounted(fetchItemList);

    return {
      itemList,
      viewMode,
      filters,
      fetchItemList,
      updateFilters,
      updateViewMode,
    };
  }
};
</script>

<style lang="scss" scoped></style>
