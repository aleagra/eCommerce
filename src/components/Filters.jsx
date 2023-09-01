function Filters() {
  return (
    <div className="h-full border-r top-0 w-[250px] fixed bg-white">
      <h1 className="text-2xl w-full text-center py-5 h-[80px] bg-[#476dea] text-white">
        E-COMMERCE
      </h1>
      <div className="grid grid-rows-[230px_230px_230px_1fr] h-full mt-12">
        <div className="flex flex-col gap-4 pl-16 pr-12">
          <h1 className="text-lg font-medium">Category</h1>
          <ul className="flex flex-col w-full gap-2 text-sm">
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              <span> Unisex</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Men
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Women
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Kids
            </li>
          </ul>
        </div>
        <div className="flex  flex-col gap-4 pl-16">
          <h1 className="text-2xl font-medium">Price</h1>
          <ul className="flex flex-col  w-full gap-2 text-base">
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              $0 - $30.000
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              $30.000 - $45.000
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              $45.000 - $75.000
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />+
              $75.000
            </li>
          </ul>
        </div>
        <div className="flex  flex-col gap-4 pl-16 pr-12">
          <h1 className="text-2xl font-medium">Color</h1>
          <ul className="flex flex-col w-full gap-2 text-lg">
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Black
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              White
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Blue
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="border border-black/10 mx-2" />
              Brown
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
