import {
  fetchFeaturedItemsAPI,
  fetchItemAPI,
  fetchItemsFilteredAPI,
  fetchLatestItemsAPI,
  fetchPagesAPI,
  fetchTrendingItemsAPI,
} from "../api/server";
import { IFilterItem } from "../types/filter-item";
import { IItem } from "../types/item";

type FetchItemsFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

type FetchItemFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<IItem | null>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  id: string
) => Promise<void>;

type FetchItemsFeaturedFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  page: number,
  itemsPerPage: number
) => Promise<void>;

type FetchItemsLatestFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  tag: string
) => Promise<void>;

type FetchPagesFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAllPages: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  perPage: number
) => Promise<void>;

type FetchItemsFilteredOptions = {
  brands?: IFilterItem[];
  discounts?: IFilterItem[];
  stars?: IFilterItem[];
  categories?: IFilterItem[];
  prices?: IFilterItem[];
  perPage?: number;
  page?: number;
  sortBy?: string;
};

type FetchItemsFilteredFunction = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  activeFilterOptions: FetchItemsFilteredOptions,
  itemsDisplayOptions: { perPage: number; page: number; sortBy: string }
) => Promise<void>;

export const fetchTrendingItems: FetchItemsFunction = async (
  setLoading,
  setItems,
  setError
) => {
  setLoading(true);
  try {
    const trendingData = await fetchTrendingItemsAPI();
    setItems(trendingData);
  } catch (err) {
    setError("Failed to load trending items");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

export const fetchItem: FetchItemFunction = async (
  setLoading,
  setItem,
  setError,
  id
) => {
  setLoading(true);
  try {
    const itemData = await fetchItemAPI(Number(id));
    setItem(itemData);
  } catch (err) {
    setError("Failed to load item details");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

export const fetchFeaturedItems: FetchItemsFeaturedFunction = async (
  setLoading,
  setItems,
  setError,
  page,
  itemsPerPage
) => {
  setLoading(true);
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  try {
    const featuredData = await fetchFeaturedItemsAPI(start, end);
    setItems(featuredData);
  } catch (err) {
    setError("Failed to load featured items");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

export const fetchLatestItems: FetchItemsLatestFunction = async (
  setLoading,
  setItems,
  setError,
  tag
) => {
  setLoading(true);
  try {
    const latestData = await fetchLatestItemsAPI(tag);
    setItems(latestData);
  } catch (err) {
    setError("Failed to load latest items");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

export const fetchPages: FetchPagesFunction = async (
  setLoading,
  setAllPages,
  setError,
  perPage
) => {
  setLoading(true);
  try {
    const allFetchedPages = await fetchPagesAPI(perPage);
    setAllPages(allFetchedPages);
  } catch (err) {
    setError("Failed to get pages");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

export const fetchFilteredItems: FetchItemsFilteredFunction = async (
  setLoading,
  setItems,
  setError,
  activeFilterOptions,
  itemsDisplayOptions
) => {
  setLoading(true);
  try {
    const itemsData = await fetchItemsFilteredAPI({
      ...activeFilterOptions,
      perPage: itemsDisplayOptions.perPage,
      page: itemsDisplayOptions.page,
      sortBy: itemsDisplayOptions.sortBy,
    });
    setItems(itemsData);
  } catch (err) {
    setError("Failed to load products");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
