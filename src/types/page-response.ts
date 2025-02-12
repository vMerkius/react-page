import { IItem } from "./item";

export interface IErrorResponse {
  success: false;
  error: string;
}

export interface IItemsSuccessReponse {
  success: true;
  data: IItem[];
}

export interface IItemSuccessReponse {
  success: true;
  data: IItem;
}

export interface IPageSuccessReponse {
  success: true;
  data: number;
}
