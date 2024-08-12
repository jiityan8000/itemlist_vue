<template>
  <div class="itemListPage">
    <h1>商品一覧</h1>
    <ItemFilters :limitList="limitList" :categoryList="categoryList" :artistList="artistList" :storeList="storeList" :monthList="monthList" :filters="filters" @update:filters="updateFilters" />
    <ViewModeSelect :viewMode="viewMode" @update:viewMode="updateViewMode" />
    <ItemList :itemList="itemList" :viewMode="viewMode" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ItemList from '@/components/ItemList.vue';
import ItemFilters from '@/components/ItemFilters.vue';
import ViewModeSelect from '@/components/ViewModeSelect.vue';

export default {
  components: {
    ItemFilters,
    ViewModeSelect,
    ItemList,
  },
  props: {
    endpoint: {
      type: String,
      required: true
    },
    defaultViewMode: {
      type: String,
      required: true
    },
    limitList: {
      type: Array,
      required: true
    },
    categoryList: {
      type: Array,
      required: true
    },
    artistList: {
      type: Array,
      required: true
    },
    monthList: {
      type: Array,
      required: true
    },
    storeList: {
      type: Array,
      required: true
    },
  },
  setup(props) {
    const itemList = ref([]);
    const viewMode = ref(props.defaultViewMode);
    const filters = ref({
      limit: 10,
      category: '',
      artist: '',
      group: '',
      stores: []
    });

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

<style lang="scss" scoped>
.itemListPage {
  max-width: 1000px;
  padding: 20px;
}
</style>
