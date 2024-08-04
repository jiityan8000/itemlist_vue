<template>
  <div>
    <label for="limit">件数:</label>
    <select id="limit" v-model="filters.limit" @change="updateFilters">
      <option v-for="limit in limitList" :key="limit" :value="limit">{{ limit }}</option>
    </select>

    <label for="category">カテゴリ:</label>
    <select id="category" v-model="filters.category" @change="updateFilters">
      <option value="">すべて</option>
      <option value="photo">写真</option>
      <option value="goods">グッズ</option>
    </select>

    <label for="artist">アーティスト:</label>
    <select id="artist" v-model="filters.artist" @change="updateFilters">
      <option value="">すべて</option>
      <option value="tokio">Tokio</option>
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

<script>
export default {
  props: {
    limitList: {
      type: Array,
      required: true
    },
    storeList: {
      type: Array,
      required: true
    },
    monthList: {
      type: Array,
      required: true
    },
    filters: {
      type: Object,
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