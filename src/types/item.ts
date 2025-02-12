import { IMore } from "./more";
import { IReview } from "./review";

export interface IItem {
  id: number;
  name: string;
  img: string;
  imgs?: string[];
  description: string;
  descriptionLong: string;
  more: IMore[];
  reviews: IReview[];
  video: string;
  stars: number;
  code: string;
  price: number;
  discount: number;
  category: string;
  tags: string[];
}
