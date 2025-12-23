import { TCategory } from "./types";

export interface IMenuItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  category: TCategory;
  ingredients: string[];
}

export interface ICartItem {
  id: string;
  mealId: number;
  title: string;
  quantity: number;
  price: number;
}
