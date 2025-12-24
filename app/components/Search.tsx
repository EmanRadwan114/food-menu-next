"use client";
import React, { useContext, useRef, useState } from "react";
import { MealsContext } from "../contexts/MealsContext";
import { egyptianMenu } from "../data/menuItems";
import { debounce } from "../utils/helpersFns";
import { usePathname } from "next/navigation";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setMeals } = useContext(MealsContext);

  //———————————————————— get route to render input conditionally ————————————————————
  const pathname = usePathname();

  //———————————————————————————————— debouncing search ————————————————————————————————
  const debouncedSearch = useRef(
    debounce((val) => {
      const filteredMeals = egyptianMenu.filter(
        (item) =>
          item.title.toLowerCase().includes(val.toLowerCase()) ||
          item.description.toLowerCase().includes(val.toLowerCase())
      );

      setMeals(filteredMeals);
    }, 500)
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  //———————————————————————————————— render conditionally ————————————————————————————————
  if (pathname.includes("cart")) return null;

  return (
    <div className="w-fit">
      <input
        type="search"
        placeholder="Search a Meal..."
        className="px-3 bg-background py-1 border border-foreground/30 rounded-sm w-full focus-within:outline-primary focus-within:outline-1"
        value={searchTerm}
        onChange={handleChange}
        onBlur={() => {
          setSearchTerm("");
        }}
      />
    </div>
  );
};

export default Search;
