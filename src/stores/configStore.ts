import { defineStore } from 'pinia';
import type {  Category, Artist, Month, Store, Config } from '@/types/common';

export const useConfigStore = defineStore('config', {
  state: () => ({
    ITEM_LIST_ENDPOINT: '' as string,
    defaultViewMode: '' as string,
    limitList: [] as number[],
    categoryList: [] as Category[],
    artistList: [] as Artist[],
    monthList: [] as Month[],
    storeList: [] as Store[],
  }),
  actions: {
    initializeConfig(config: Config) {
      this.ITEM_LIST_ENDPOINT = config.ITEM_LIST_ENDPOINT;
      this.defaultViewMode = config.defaultViewMode;
      this.limitList = config.limitList;
      this.categoryList = config.categoryList;
      this.artistList = config.artistList;
      this.monthList = config.monthList;
      this.storeList = config.storeList;
    }
  }
});
