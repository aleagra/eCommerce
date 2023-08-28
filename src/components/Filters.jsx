function Filters() {
  return (
    <div className="w-full h-screen shadow-md pt-10 px-12">
      <div className="flex justify-center flex-col gap-4">
        <h1 className="text-3xl font-semibold">Category</h1>
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
