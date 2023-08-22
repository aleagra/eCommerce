import { useState } from "react";
import FilterButtons from "./FilterButtons";
import Navbar from "./Navbar";
import { BRAND_FILTERS } from "./const";
import ContainerCards from "./ContainerCards";

function App() {
  const [activeBrandFilter, setActiveBrandFilter] = useState(BRAND_FILTERS.ALL);

  const handleFilterChange = (newFilter) => {
    setActiveBrandFilter(newFilter);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 px-12 mt-10">
        <h1 className="text-3xl font-medium">Recommended</h1>
        <FilterButtons
          activeFilter={activeBrandFilter}
          onChangeFilter={handleFilterChange}
        />
        <ContainerCards activeBrandFilter={activeBrandFilter} />
      </div>
    </>
  );
}

export default App;
