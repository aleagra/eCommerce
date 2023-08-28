import { useState } from 'react'
import { ContainerCards, FilterButtons, Navbar } from '../components'
import { BRAND_FILTERS } from '../utils/data'
import Filters from '../components/Filters'

function App() {
    const [activeBrandFilter, setActiveBrandFilter] = useState(BRAND_FILTERS.ALL)

    const handleFilterChange = (newFilter) => {
        setActiveBrandFilter(newFilter)
    }

    return (
        <>
            <main className="grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] w-full h-full">
                <section className="col-start-1 row-start-1 row-span-2 w-full h-full">
                    <Filters />
                </section>
                <Navbar />
                <section className="col-start-2 row-start-2 w-full">
                    <div className="flex flex-col gap-8 px-12 py-10">
                        <h1 className="text-3xl font-medium">Recommended</h1>
                        <FilterButtons activeFilter={activeBrandFilter} onChangeFilter={handleFilterChange} />
                        <ContainerCards activeBrandFilter={activeBrandFilter} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
