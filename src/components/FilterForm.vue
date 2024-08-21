<!-- FilterForm.vue -->
<template>
  <div>
    <label for="limit">件数:</label>
    <select id="limit" v-model="itemStore.filters.limit">
      <option v-for="limit in configStore.limitList" :key="limit" :value="limit">{{ limit }}</option>
    </select>

    <label for="category">カテゴリ:</label>
    <select id="category" v-model="itemStore.filters.category">
      <option value="">すべて</option>
      <option v-for="category in configStore.categoryList" :key="category.value" :value="category.value">{{ category.name }}</option>
    </select>

    <label for="artist">アーティスト:</label>
    <select id="artist" v-model="itemStore.filters.artist">
      <option value="">すべて</option>
      <option v-for="artist in configStore.artistList" :key="artist.value" :value="artist.value">{{ artist.name }}</option>
    </select>

    <label for="release-date">発売月:</label>
    <select id="release-date" v-model="itemStore.filters.group">
      <option value="">すべて</option>
      <option v-for="month in configStore.monthList" :key="month.value" :value="month.value">{{ month.name }}</option>
    </select>

    <div>取り扱い店舗</div>
    <ul class="storeList">
      <li v-for="store in configStore.storeList" :key="store.value">
        <input type="checkbox" :id="store.value" :value="store.value" v-model="itemStore.filters.stores">
        <label :for="store.value">{{ store.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useItemStore } from '@/stores/itemStore';
import { useConfigStore } from '@/stores/configStore';

export default defineComponent({
  setup() {
    const itemStore = useItemStore();
    const configStore = useConfigStore();

    return {
      itemStore,
      configStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.storeList {
  display: flex;
  gap: 10px;
  padding: 0;

  li {
    list-style: none;
  }
}
</style>
