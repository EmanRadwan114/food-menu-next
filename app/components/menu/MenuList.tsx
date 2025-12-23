"use client";

import React, { useContext, useEffect } from "react";
import MenuCard from "./MenuCard";
import { egyptianMenu } from "../../data/menuItems";
import { AnimatePresence } from "motion/react";
import { MealsContext } from "../../contexts/MealsContext";

const MenuList: React.FC = () => {
  const { meals, selectedCategory, setMeals } = useContext(MealsContext);

  useEffect(() => {
    const filteredMeals =
      selectedCategory !== "all"
        ? egyptianMenu.filter((item) => item.category === selectedCategory)
        : egyptianMenu;

    setMeals(filteredMeals);
  }, [selectedCategory, setMeals]);

  return (
    <AnimatePresence>
      {meals.length ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {meals.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p className="text-foreground/80 text-xl text-center mt-5 font-semibold">
          No Meals Found
        </p>
      )}
    </AnimatePresence>
  );
};

export default MenuList;
