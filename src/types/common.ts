export type Item = {
  name: string;
  url: string;
}

export type Filters = {
  limit: number,
  category: string,
  artist: string,
  group: string,
  stores: string[],
}

export type Category = {
  name: string;
  value: string;
}

export type Artist = {
  name: string;
  value: string;
}

export type Month = {
  name: string;
  value: string;
}

export type Store = {
  name: string;
  value: string;
}

export type Config = {
  ITEM_LIST_ENDPOINT: string;
  defaultViewMode: string;
  limitList:  number[];
  categoryList:  Category[];
  artistList:  Artist[];
  monthList:  Month[];
  storeList:  Store[];
}
