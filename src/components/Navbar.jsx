import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "../icons";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
function Navbar() {
  var { totalUniqueItems } = useCart();
  return (
    <nav className="w-full items-center flex justify-between px-12 py-5 border-b-2 border-[#e5e5e5]">
      <h1>ecommerce</h1>
      <ul className="flex gap-12 text-[#9c9c9c] text-lg uppercase">
        <NavLink to={"/"} activeclassname={"active"}>
          Home
        </NavLink>
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
            className="outline-none bg-[#f5f5f5] text-[#c5c5c5] shadow-sm rounded-lg py-3 pl-12 pr-14 text-sm"
          />
          <SearchIcon />
        </div>
        <NavLink>
          <HeartIcon className={"w-6 h-6"} />
        </NavLink>
        <NavLink to={"/cart"} activeclassname={"active"}>
          <div className="flex relative">
            <CartIcon className={"w-6 h-6 stroke-[#c5c5c5]"} />
            <span
              className={`px-[3px] absolute right-0 top-0 h-fit rounded-full ${
                totalUniqueItems > 0
                  ? "bg-blue-800 text-white text-xs"
                  : "hidden"
              }`}
            >
              {totalUniqueItems}
            </span>
          </div>
        </NavLink>
        <NavLink
          activeclassname={"active"}
          className={"stroke-[#c5c5c5]"}
          to={"/login"}
        >
          <UserIcon />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
