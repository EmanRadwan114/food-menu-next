"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { MealsContext } from "@/app/contexts/MealsContext";

const CartIcon: React.FC = () => {
  const { cartItems } = useContext(MealsContext);

  return (
    <Link href={"/cart"} className="cursor-pointer px-1 py-2 relative">
      {cartItems.length !== 0 && (
        <div className="absolute -end-1.5 top-0.5 size-5 bg-primary p-1 rounded-full flex items-center justify-center">
          <span className="text-xs">{cartItems.length}</span>
        </div>
      )}

      <ShoppingCart />
    </Link>
  );
};

export default CartIcon;
