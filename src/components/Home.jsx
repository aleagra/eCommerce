import { useState } from "react";
import FilterButtons from "./FilterButtons";
import Navbar from "./Navbar";
import { BRAND_FILTERS } from "./const";

function Home() {
  const [activeBrandFilter, setActiveBrandFilter] = useState(BRAND_FILTERS.ALL);

  const handleFilterChange = (newFilter) => {
    setActiveBrandFilter(newFilter);
  };
  return (
    <>
      <Navbar />
      <FilterButtons
        activeFilter={activeBrandFilter}
        onChangeFilter={handleFilterChange}
      />
    </>
  );
}

export default Home;
