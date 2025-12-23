"use client";

import React, { useContext } from "react";
import { ICartItem } from "../../types/interfaces";
import Image from "next/image";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import { MealsContext } from "../../contexts/MealsContext";
import { toast } from "react-toastify";

interface IProps {
  meal: ICartItem;
}

const CartItem: React.FC<IProps> = ({ meal }) => {
  const { cartItems, setCartItems } = useContext(MealsContext);

  //———————————————————————————————— handlers ————————————————————————————————
  const deleteItem = (id: string) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);

    setCartItems(filteredItems);
    toast.success("Item deleted successfully!");
  };

  const increaseQuantityByOne = (id: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          }
        : item
    );

    setCartItems(updatedItems);
  };

  const decreaseQuantityByOne = (id: string) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            totalPrice:
              item.price * (item.quantity > 1 ? item.quantity - 1 : 1),
          }
        : item
    );

    setCartItems(updatedItems);
  };

  return (
    <div className="flex gap-2 shadow-lg border border-foreground/10 rounded-sm">
      <div className="max-w-1/3 h-full">
        {/* img */}
        <Image
          src={meal.thumbnail}
          alt={meal.title}
          className="rounded-s-sm max-h-32"
          width={500}
          height={250}
        ></Image>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 gap-2 p-2">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-lg sm:text-xl">{meal.title}</h2>
          <Trash2
            size={34}
            className="hover:text-red-800 transition-colors p-2 cursor-pointer"
            onClick={() => deleteItem(meal.id)}
          />
        </div>

        {/* quantity */}
        <div className="flex gap-2 items-center justify-between border-2 border-foreground/10 rounded-sm max-w-32">
          <Button
            className={`bg-foreground/10! py-0! px-3! rounded-none! text-foreground! disabled:opacity-30`}
            onClick={() => decreaseQuantityByOne(meal.id)}
            disabled={meal.quantity === 1}
          >
            -
          </Button>
          <span className="text-primary dark:text-lime-600 font-bold">
            {meal.quantity}
          </span>
          <Button
            className="bg-foreground/10! py-0! px-3! rounded-none! text-foreground!"
            onClick={() => increaseQuantityByOne(meal.id)}
          >
            +
          </Button>
        </div>

        {/* price */}
        <p className="text-lg flex gap-2 justify-end items-end">
          <span className="text-sm text-foreground/50">
            ({meal.price} EGP x {meal.quantity})
          </span>
          <span>{meal.totalPrice} EGP</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
