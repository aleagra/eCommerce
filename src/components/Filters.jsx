function Filters() {
  return (
    <div className="w-full h-full border-r sticky top-0">
        <h1 className="font-bold text-3xl w-full text-center py-5">E-COMMERCE</h1>
      <div className="flex justify-center flex-col gap-4 px-12">
        <h1 className="text-2xl font-semibold">Category</h1>
        <ul className="flex flex-col w-full gap-2 text-xl">
          <li>
            <input type="checkbox" /> Sneakers
          </li>
          <li>
            <input type="checkbox" /> Sneakers
          </li>
          <li>
            <input type="checkbox" /> Sneakers
          </li>
          <li>
            <input type="checkbox" /> Sneakers
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
