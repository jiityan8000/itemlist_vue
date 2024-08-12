<template>
  <div>
    <label for="limit">件数:</label>
    <select id="limit" v-model="filters.limit" @change="updateFilters">
      <option v-for="limit in limitList" :key="limit" :value="limit">{{ limit }}</option>
    </select>

    <label for="category">カテゴリ:</label>
    <select id="category" v-model="filters.category" @change="updateFilters">
      <option value="">すべて</option>
      <option v-for="category in categoryList" :key="category.value" :value="category.value">{{ category.name }}</option>
    </select>

    <label for="artist">アーティスト:</label>
    <select id="artist" v-model="filters.artist" @change="updateFilters">
      <option value="">すべて</option>
      <option v-for="artist in artistList" :key="artist.value" :value="artist.value">{{ artist.name }}</option>
    </select>

    <label for="release-date">発売月:</label>
    <select id="release-date" v-model="filters.group" @change="updateFilters">
      <option value="">すべて</option>
      <option v-for="month in monthList" :key="month.value" :value="month.value">{{ month.name }}</option>
    </select>

    <div>取り扱い店舗</div>
    <ul class="storeList">
      <li v-for="store in storeList" :key="store.value">
        <input type="checkbox" :id="store.value" :value="store.value" v-model="filters.stores" @change="updateFilters">
        <label :for="store.value">{{ store.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Filters, Category, Artist, Month, Store } from '@/types/common'

export default {
  props: {
    limitList: {
      type: Array as () => number[],
      required: true
    },
    categoryList: {
      type: Array as () => Category[],
      required: true
    },
    artistList: {
      type: Array as () => Artist[],
      required: true
    },
    storeList: {
      type: Array as () => Store[],
      required: true
    },
    monthList: {
      type: Array as () => Month[],
      required: true
    },
    filters: {
      type: Object as () => Filters,
      required: true,
    }
  },
  methods: {
    updateFilters() {
      this.$emit('update:filters', { ...this.filters });
    }
  },
}
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