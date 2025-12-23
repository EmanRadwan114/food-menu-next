import React from "react";
import Tab from "./Tabs";

const filters: string[] = ["all", "breakfast", "lunch", "dinner", "dessert"];

const FilterTabs: React.FC = () => {
  return (
    <ul className="flex gap-x-2 gap-y-3 flex-wrap justify-center items-center">
      {filters.map((item) => (
        <Tab filter={item} key={item} />
      ))}
    </ul>
  );
};

export default FilterTabs;
