import axios from "axios";
import { IFilterItem } from "../types/filter-item";
import { IItem } from "../types/item";
import {
  IErrorResponse,
  IItemsSuccessReponse,
  IItemSuccessReponse,
  IPageSuccessReponse,
} from "../types/page-response";
const URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const fetchFeaturedItemsAPI = async (
  start: number,
  end: number
): Promise<IItem[]> => {
  try {
    const response = await axios.get<IErrorResponse | IItemsSuccessReponse>(
      `${URL}/featured`,
      {
        params: { start, end },
      }
    );

    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchLatestItemsAPI = async (option: string): Promise<IItem[]> => {
  try {
    const response = await axios.get<IErrorResponse | IItemsSuccessReponse>(
      `${URL}/latest`,
      {
        params: { option },
      }
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchTrendingItemsAPI = async (): Promise<IItem[]> => {
  try {
    const response = await axios.get<IErrorResponse | IItemsSuccessReponse>(
      `${URL}/trending`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchItemAPI = async (id: number): Promise<IItem> => {
  try {
    const response = await axios.get<IErrorResponse | IItemSuccessReponse>(
      `${URL}/item/${id}`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchItemsAPI = async (start: number, end: number): Promise<IItem[]> => {
  try {
    const response = await axios.get<IErrorResponse | IItemsSuccessReponse>(
      `${URL}/items`,
      {
        params: { start, end },
      }
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchItemsFilteredAPI = async (options: {
  brands?: IFilterItem[];
  discounts?: IFilterItem[];
  stars?: IFilterItem[];
  categories?: IFilterItem[];
  prices?: IFilterItem[];
  perPage?: number;
  page?: number;
  sortBy?: string;
}): Promise<IItem[]> => {
  try {
    const response = await axios.get<IErrorResponse | IItemsSuccessReponse>(
      `${URL}/filtered`,
      {
        params: { options: JSON.stringify(options) },
      }
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const fetchPagesAPI = async (perPage: number): Promise<number> => {
  try {
    const response = await axios.get<IErrorResponse | IPageSuccessReponse>(
      `${URL}/pages`,
      {
        params: { perPage },
      }
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {
  fetchFeaturedItemsAPI,
  fetchLatestItemsAPI,
  fetchItemAPI,
  fetchItemsAPI,
  fetchTrendingItemsAPI,
  fetchItemsFilteredAPI,
  fetchPagesAPI,
};
