import { BRAND_FILTERS } from "../utils/data";

const FilterButtons = ({ activeFilter, onChangeFilter }) => {
  return (
    <>
      <div className="flex gap-10">
        <div className="flex gap-6 text-lg text-[#9c9c9c] w-full">
          {Object.values(BRAND_FILTERS).map((filter) => (
            <button
              key={filter}
              onClick={() => onChangeFilter(filter)}
              className={`py-2 px-6 rounded-md border border-[#e5e5e5] ${
                activeFilter === filter
                  ? " bg-[#201c27] text-white transition-colors duration-700"
                  : ""
              }`}
            >
              {filter === BRAND_FILTERS.ALL ? "All Products" : filter}
            </button>
          ))}
        </div>
        <div className="flex justify-end w-fit">
          <button
            onClick={() => onChangeFilter("popular")}
            className={`py-2 px-6 rounded-md border border-[#e5e5e5] ${
              activeFilter === "popular"
                ? " bg-[#201c27] text-white transition-colors duration-700"
                : ""
            }`}
          >
            Popular
          </button>
        </div>
      </div>
    </>
  );
};
export default FilterButtons;
