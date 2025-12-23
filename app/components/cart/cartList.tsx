"use client";
import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";
import CartItem from "./cartItem";

const CartList: React.FC = () => {
  const { cartItems } = useContext(MealsContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
      {cartItems.map((item) => (
        <CartItem key={item.id} meal={item} />
      ))}
    </div>
  );
};

export default CartList;
