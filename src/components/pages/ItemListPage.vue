<template>
  <div class="itemListPage">
    <h1>商品一覧</h1>
    <ItemFilters :limitList="limitList" :storeList="storeList" :monthList="monthList" :filters="filters" @update:filters="updateFilters" />
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
  setup() {
    const itemList = ref([]);
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
    const viewMode = ref('grid');
    const limitList = ref([10, 20, 30]);
    const monthList = ref([
      {
        name: "2024/08",
        value: "00001",
      },
      {
        name: "2024/09",
        value: "00002",
      },
      {
        name: "2024/10",
        value: "00003",
      },
    ]);
    const storeList = ref([
      {
        name: "EC",
        value: "ec",
      },
      {
        name: "TOKYO",
        value: "tokyo",
      },
      {
        name: "NAGOYA",
        value: "nagoya",
      },
      {
        name: "OSAKA",
        value: "osaka",
      },
      {
        name: "FUKUOKA",
        value: "fukuoka",
      },
    ]);
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
        const response = await axios.get(endpoint, {
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
      limitList,
      storeList,
      monthList,
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
