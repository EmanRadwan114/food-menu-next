import React from "react";
import Search from "./Search";
import Container from "./ui/Container";
import { Lobster } from "next/font/google";
import CartIcon from "./ui/CartIcon";

const lobsterFont = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar: React.FC = () => {
  return (
    <header className="bg-neutral-200 dark:bg-neutral-900 sticky top-0 w-full shadow-md z-100">
      <Container className="py-4!">
        <nav className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <p
            className={`font-extrabold text-3xl text-lime-700 ${lobsterFont.className}`}
          >
            🥘Egyptian Food
          </p>

          {/* cart & search */}
          <div className="flex items-center gap-8 flex-1 justify-end">
            <CartIcon />
            <div className="w-fit">
              <Search />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
