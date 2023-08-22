import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../icons";

function Navbar() {
  return (
    <nav className="w-full items-center flex justify-between px-12 py-5 border-b-2 border-[#e5e5e5]">
      <ul className="flex gap-12 text-[#9c9c9c] text-xl">
        <li>Home</li>
        <li>Sale</li>
        <li>Man</li>
        <li>Woman</li>
        <li>Kids</li>
      </ul>
      <div className="flex gap-6 h-fit items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Enter your search shoes..."
            className="outline-none bg-[#f5f5f5] text-[#c5c5c5] rounded-lg py-3 pl-12 pr-14 text-sm"
          />
          <SearchIcon />
        </div>
        <HeartIcon />
        <div className="flex relative">
          <CartIcon />
          <span className="p-[3px] absolute right-0 top-1 h-fit rounded-full bg-[#ea3839]"></span>
        </div>
        <UserIcon />
      </div>
    </nav>
  );
}

export default Navbar;
