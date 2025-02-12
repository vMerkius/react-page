import { IFilterItem } from "../../types/filter-item";
import FilterGroup from "./filter-group";
import { EFilterGroup } from "../../types/filter-group";

type FilterProps = {
  options: {
    brands: IFilterItem[];
    discounts: IFilterItem[];
    stars: IFilterItem[];
    categories: IFilterItem[];
    prices: IFilterItem[];
  };
  handleFilterChange: (group: EFilterGroup, name: string) => void;
};

const Filter: React.FC<FilterProps> = ({ options, handleFilterChange }) => {
  return (
    <div className="filter">
      <FilterGroup
        title="Product Brand"
        items={options.brands}
        onChange={(name) => {
          handleFilterChange(EFilterGroup.BRANDS, name);
        }}
        color="#603EFF"
        colorLight="#DDD6FF"
      />
      <FilterGroup
        title="Discount Offer"
        items={options.discounts}
        onChange={(name) => {
          handleFilterChange(EFilterGroup.DISCOUNTS, name);
        }}
        color="#FB2E86"
        colorLight="#FEB9C4"
      />
      <FilterGroup
        title="Rating"
        items={options.stars}
        onChange={(name) => {
          handleFilterChange(EFilterGroup.STARS, name);
        }}
        color="#603EFF"
        colorLight="#DDD6FF"
        stars
      />
      <FilterGroup
        title="Categories"
        items={options.categories}
        onChange={(name) => {
          handleFilterChange(EFilterGroup.CATEGORIES, name);
        }}
        color="#FB2E86"
        colorLight="#FEB9C4"
      />
      <FilterGroup
        title="Price"
        items={options.prices}
        onChange={(name) => {
          handleFilterChange(EFilterGroup.PRICES, name);
        }}
        color="#FB2E86"
        colorLight="#FEB9C4"
      />
    </div>
  );
};

export default Filter;
