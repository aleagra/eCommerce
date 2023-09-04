import { useState } from "react";
import { ContainerCards, FilterButtons, Navbar } from "../components";
import { BRAND_FILTERS } from "../utils/data";

function App() {
  const [activeBrandFilter, setActiveBrandFilter] = useState(BRAND_FILTERS.ALL);

  const handleFilterChange = (newFilter) => {
    setActiveBrandFilter(newFilter);
  };

  return (
    <>
      <main className="grid grid-rows-[80px_1fr] w-full h-full">
        {/* <section className="col-start-1 row-start-1 row-span-2 w-full">
          <Filters />
        </section> */}

        <Navbar />

        <section className=" row-start-2 w-full">
          <div className="flex flex-col gap-8 w-[1440px] mx-auto pt-10 pb-20">
            <h1 className="text-3xl font-medium">Recommended</h1>
            <FilterButtons
              activeFilter={activeBrandFilter}
              onChangeFilter={handleFilterChange}
            />
            <ContainerCards activeBrandFilter={activeBrandFilter} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
