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
  thumbnail: string;
  quantity: number;
  price: number;
  totalPrice: number;
}
