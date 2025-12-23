"use client";

import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";
import Button from "./Button";

interface IProps {
  filter: string;
}

const Tab: React.FC<IProps> = ({ filter }) => {
  const { selectedCategory, setSelectedCategory } = useContext(MealsContext);

  return (
    <Button
      onClick={() => setSelectedCategory(filter)}
      className={`px-4 py-1 text-base cursor-pointer text-foreground transition-colors duration-300 rounded-full! ${
        selectedCategory === filter
          ? "bg-primary text-neutral-50"
          : "bg-neutral-200! dark:bg-neutral-900! hover:bg-neutral-800/20! text-foreground!"
      }`}
    >
      <span className="capitalize font-semibold">{filter}</span>
    </Button>
  );
};

export default Tab;
