import React from "react";
import Container from "./../../components/ui/Container";
import CartList from "@/app/components/cart/cartList";
import CartHeader from "@/app/components/cart/cartHeader";

const Cart: React.FC = () => {
  return (
    <Container className="py-10!">
      {/* header */}
      <section className="flex flex-col gap-8">
        <CartHeader />
        {/* content */}
        <div>
          <CartList />
        </div>
      </section>
    </Container>
  );
};

export default Cart;
