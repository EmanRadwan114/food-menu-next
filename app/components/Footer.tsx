import React from "react";
import Container from "./ui/Container";
import { Lobster } from "next/font/google";

const lobsterFont = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center bg-neutral-200 dark:bg-neutral-900 mt-auto">
      <Container className="py-4!">
        <p className={`text-foreground capitalize font-semibold text-center`}>
          all rights reserved &copy;{" "}
          <span className={` ${lobsterFont.className}`}>Egyptian Food</span>{" "}
          {year}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
