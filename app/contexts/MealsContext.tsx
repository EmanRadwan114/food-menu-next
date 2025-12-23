"use client";

import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ICartItem, IMenuItem } from "../types/interfaces";
import { egyptianMenu } from "../data/menuItems";

interface IMealsContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  meals: IMenuItem[];
  setMeals: React.Dispatch<React.SetStateAction<IMenuItem[]>>;
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

const MealsContext = createContext<IMealsContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  meals: [],
  setMeals: () => {},
  cartItems: [],
  setCartItems: () => {},
});

const MealsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [meals, setMeals] = useState<IMenuItem[]>(egyptianMenu);
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const storedCart = localStorage.getItem("mealsCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  //———————————————————————————————— get stored cart items ————————————————————————————————
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mealsCart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <MealsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        meals,
        setMeals,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContext, MealsContextProvider };
