"use client";
import React, { useContext, useMemo } from "react";
import { MealsContext } from "../../contexts/MealsContext";
import Button from "../ui/Button";

const CartHeader: React.FC = () => {
  const { cartItems, setCartItems } = useContext(MealsContext);

  const totalPrice = useMemo(
    () =>
      cartItems.length &&
      cartItems.reduce(
        (acc, curr) => ({ totalPrice: acc.totalPrice + curr.totalPrice }),
        { totalPrice: 0 }
      ).totalPrice,
    [cartItems]
  );

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <header className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
        <h1 className="capitalize text-xl sm:text-2xl font-bold">cart items</h1>
        {cartItems.length !== 0 && (
          <p className="flex gap-2 text-xl font-bold">
            <span>Total Price:</span>
            <span className="text-primary dark:text-lime-600">
              {totalPrice} EGP
            </span>
          </p>
        )}
      </div>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty. Start adding a new meal!</p>
      ) : (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-lg">
            You have{" "}
            <span className="text-primary dark:text-lime-600 font-bold">
              {cartItems.length === 1
                ? cartItems.length + " meal"
                : cartItems.length + " meals"}
            </span>{" "}
            in your cart
          </p>
          <Button
            className="bg-red-800! hover:bg-red-800/80!"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
      )}
    </header>
  );
};

export default CartHeader;
