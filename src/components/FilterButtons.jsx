/* eslint-disable react/prop-types */

import { BRAND_FILTERS } from "./const";

const FilterButtons = ({ activeFilter, onChangeFilter }) => {
  return (
    <>
      <div className="flex flex-col px-12 mt-20 gap-10">
        <h1 className="text-3xl font-semibold">Recomended</h1>
        <div className="flex gap-6 text-lg text-[#9c9c9c]">
          {Object.values(BRAND_FILTERS).map((filter) => (
            <button
              key={filter}
              onClick={() => onChangeFilter(filter)}
              className={` py-3 px-6 rounded-md border border-[#e5e5e5] ${
                activeFilter === filter
                  ? "active bg-[#3b6eec] text-white transition-colors duration-700"
                  : ""
              } `}
            >
              {filter === BRAND_FILTERS.ALL ? "All Products" : filter}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterButtons;
