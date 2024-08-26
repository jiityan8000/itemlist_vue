export type ItemListResponse = {
	count: number;
	pages: {
		total: number;
		current: number;
	};
	list: Item[];
}

export type Item = {
	id: string;
	title: string;
	price: string;
	sale_start_date: string;
	date: string;
	stores: Store[];
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
