import { useEffect, useState } from "react";
import { IItem } from "../../types/item";
import Dot from "../UI/dot";
import Filter from "./filter";
import Items from "./items";
import { IFilterItem } from "../../types/filter-item";
import { EFilterGroup } from "../../types/filter-group";
import Bar from "./bar";
import Paging from "./paging";
import { useSearchParams } from "react-router-dom";
import LoadingProducts from "../loading/loading-products";
import {
  BRANDS_FILTER,
  CATEGORIES_FILTER,
  DISCOUNTS_FILTER,
  PRICES_FILTER,
  STARS_FILTER,
} from "../../data/filter-data";
import ErrorInfo from "../UI/error-box";
import { fetchFilteredItems, fetchPages } from "../../utils/functions";

const Products = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [option, setOption] = useState<string>("Products");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [itemsDisplayOptions, setItemsDisplayOptions] = useState<{
    perPage: number;
    page: number;
    sortBy: string;
    view: string;
  }>({
    perPage: 10,
    page: 1,
    sortBy: "",
    view: "flex",
  });
  const [allPages, setAllPages] = useState<number>(1);

  const [filterOptions, setFilterOptions] = useState<{
    brands: IFilterItem[];
    discounts: IFilterItem[];
    stars: IFilterItem[];
    categories: IFilterItem[];
    prices: IFilterItem[];
  }>({
    brands: BRANDS_FILTER,
    discounts: DISCOUNTS_FILTER,
    stars: STARS_FILTER,
    categories: CATEGORIES_FILTER,
    prices: PRICES_FILTER,
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        categories: prevOptions.categories.map((category) => ({
          ...category,
          checked: category.name === categoryFromUrl,
        })),
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPages(setLoading, setAllPages, setError, itemsDisplayOptions.perPage);
  }, [itemsDisplayOptions.perPage]);

  useEffect(() => {
    type ActiveFilterOptionsType = Record<string, string[]>;

    const activeFilterOptions: ActiveFilterOptionsType = Object.entries(
      filterOptions
    ).reduce((acc, [key, group]) => {
      const activeFilters = group.filter((item) => item.checked);
      if (activeFilters.length > 0) {
        acc[key] = activeFilters.map((item) => item.name);
      }
      return acc;
    }, {} as ActiveFilterOptionsType);

    fetchFilteredItems(
      setLoading,
      setItems,
      setError,
      activeFilterOptions,
      itemsDisplayOptions
    );
  }, [filterOptions, itemsDisplayOptions]);

  useEffect(() => {
    setItemsDisplayOptions((prevOptions) => ({
      ...prevOptions,
      page: prevOptions.page !== 1 ? 1 : prevOptions.page,
    }));
  }, [itemsDisplayOptions.perPage]);

  const handleOptionClick = (option: string) => {
    setOption(option);
  };

  const handleFilterChange = (group: EFilterGroup, name: string) => {
    setFilterOptions((filterPrevOptions) => ({
      ...filterPrevOptions,
      [group]: filterPrevOptions[group].map((item) =>
        item.name === name
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      ),
    }));
  };

  const handleItemsDisplayChange = (option: string, value: string | number) => {
    setItemsDisplayOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  if (error) {
    return <ErrorInfo message={error} />;
  }

  return (
    <section className="products">
      <h2 className="products__header">Products</h2>
      <div className="products__options mini-top-gap">
        <span
          onClick={() => handleOptionClick("Home")}
          className={`products__option ${
            option === "Home" ? "products__option--active" : ""
          }`}
        >
          Home
        </span>
        <Dot small color="#D9D9D9" />
        <span
          onClick={() => handleOptionClick("Products")}
          className={`products__option ${
            option === "Products" ? "products__option--active" : ""
          }`}
        >
          Products
        </span>
      </div>
      <Bar
        options={itemsDisplayOptions}
        handleChange={handleItemsDisplayChange}
      />
      <div className="products__container small-top-gap">
        <Filter
          options={filterOptions}
          handleFilterChange={handleFilterChange}
        />
        {loading ? (
          <LoadingProducts
            perPage={itemsDisplayOptions.perPage}
            view={itemsDisplayOptions.view}
          />
        ) : (
          <Items items={items} view={itemsDisplayOptions.view} />
        )}
      </div>
      <div className="products__container medium-top-gap">
        <Paging
          page={itemsDisplayOptions.page}
          setPage={(page) =>
            setItemsDisplayOptions((prevOptions) => ({
              ...prevOptions,
              page,
            }))
          }
          totalPage={allPages}
        />
      </div>
    </section>
  );
};

export default Products;
