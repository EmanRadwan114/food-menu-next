"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "./ui/Button";
import { toast } from "react-toastify";
import { IMenuItem } from "../types/interfaces";
import { MealsContext } from "../contexts/MealsContext";
import { v4 as uuidv4 } from 'uuid';


interface IProps {
  item: IMenuItem;
}

const MenuCard: React.FC<IProps> = ({ item }) => {
  const { setCartItems } = useContext(MealsContext);

  const addToCart = (meal: IMenuItem) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: uuidv4(),
        mealId: meal.id,
        title: meal.title,
        price: meal.price,
        quantity: 1,
      },
    ]);
    toast.success("Meal is added to cart successfully!");
  };

  return (
    <motion.div
      className="bg-background flex flex-col shadow-lg group border border-foreground/10 rounded-sm overflow-hidden"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileInView="visible"
      layout
    >
      {/* img & category*/}
      <div className="relative overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          className="rounded-t-sm h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          width={500}
          height={250}
        ></Image>
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute top-4 end-4 bg-primary px-3 py-0.5 rounded-2xl text-white z-50">
          <span className="capitalize">{item.category}</span>
        </div>
      </div>
      {/* content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold capitalize text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-foreground/80 dark:text-foreground/60 mb-3">
          {item.description}
        </p>
        {/* ingredients */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.ingredients.map((ingredient) => (
            <div
              className="rounded-full py-1 px-2 bg-foreground/10 dark:bg-foreground/5 border border-foreground/10 flex items-center justify-center"
              key={ingredient}
            >
              <span className="capitalize text-xs dark:text-foreground/60">
                {ingredient}
              </span>
            </div>
          ))}
        </div>
        {/* price */}
        <div className="flex justify-between mt-auto items-center">
          <Button
            className="hover:bg-primary/80"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </Button>
          <span className="font-semibold text-primary ">{item.price} EGP</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
