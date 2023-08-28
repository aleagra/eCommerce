import { useState } from "react";
import {
  BRAND_FILTERS,
  ContainerCards,
  FilterButtons,
  Navbar,
} from "../components";
import Filters from "../components/Filters";

function App() {
  const [activeBrandFilter, setActiveBrandFilter] = useState(BRAND_FILTERS.ALL);

  const handleFilterChange = (newFilter) => {
    setActiveBrandFilter(newFilter);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[250px,1fr,] w-full">
        <div className="col-start-1 w-full">
          <Filters />
        </div>
        <div className="col-start-2 w-full">
          <div className="flex flex-col gap-8 px-12 mt-10">
            <h1 className="text-3xl font-medium">Recommended</h1>
            <FilterButtons
              activeFilter={activeBrandFilter}
              onChangeFilter={handleFilterChange}
            />
            <ContainerCards activeBrandFilter={activeBrandFilter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
