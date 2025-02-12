import { IFilterItem } from "../types/filter-item";

export const BRANDS_FILTER: IFilterItem[] = [
  { name: "Cassio", checked: false },
  { name: "Apple", checked: false },
  { name: "Sony", checked: false },
  { name: "Nike", checked: false },
  { name: "Vke", checked: false },
  { name: "Glossiness", checked: false },
];

export const DISCOUNTS_FILTER: IFilterItem[] = [
  { name: "20% Cashback", checked: false },
  { name: "5% Cashback Offer", checked: false },
  { name: "25% Discount Offer", checked: false },
];

export const STARS_FILTER: IFilterItem[] = [
  { name: "5", checked: false },
  { name: "4", checked: false },
  { name: "3", checked: false },
  { name: "2", checked: false },
  { name: "1", checked: false },
];

export const CATEGORIES_FILTER: IFilterItem[] = [
  { name: "Watches", checked: false },
  { name: "Headphones", checked: false },
  { name: "Laptop", checked: false },
  { name: "Game Console", checked: false },
  { name: "Clothes", checked: false },
  { name: "Jewellery", checked: false },
  { name: "Perfume", checked: false },
];

export const PRICES_FILTER: IFilterItem[] = [
  { name: "$0 - $150", checked: false },
  { name: "$150 - $350", checked: false },
  { name: "$350 to $500", checked: false },
  { name: "$550 to $800", checked: false },
  { name: "$800+", checked: false },
];
