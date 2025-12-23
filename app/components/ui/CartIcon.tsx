import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";

const CartIcon: React.FC = () => {
  return (
    <Link href={"/cart"} className="cursor-pointer px-1 py-2">
      <ShoppingCart />
    </Link>
  );
};

export default CartIcon;
