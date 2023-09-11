import { useState } from "react";
import { items } from "../utils/data";
import { SearchIcon } from "../icons";
import { Link } from "react-router-dom";

const ModalSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = (query) => {
    const lowercaseQuery = query.toLowerCase();

    const filteredResults = items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description.toLowerCase().includes(lowercaseQuery) ||
        item.price.toString().includes(lowercaseQuery)
    );

    const slicedResults = filteredResults.slice(0, 8);

    setSearchResults(slicedResults);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      setShowResults(true);
      performSearch(query);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <>
      {showResults && (
        <div
          className={`fixed top-0  
        right-0 w-full z-[20]   h-full flex  items-center bg-black bg-opacity-10`}
          onClick={() => {
            setShowResults(false);
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={() => {
              setShowResults(false);
            }}
          ></div>
        </div>
      )}
      <div className="relative z-40 ">
        <input
          type="text"
          placeholder="Enter your search shoes..."
          className={`outline-none  bg-[#f5f5f5] shadow-sm border ${
            showResults ? " border-[#e5e5e5]" : "border-transparent"
          } py-3 pl-12 pr-14 text-sm`}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchIcon />
        <div
          className={`absolute bg-[#f5f5f5] w-full border-x border-b overflow-y-scroll max-h-[340px] custom-scrollbar scroll-smooth ${
            showResults
              ? "opacity-100 border-[#e5e5e5]"
              : "opacity-0 border-transparent"
          } `}
        >
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="px-2 py-4 hover:bg-white transition-colors duration-200"
              onClick={() => {
                handleResultClick();
              }}
            >
              <Link
                className="w-full h-full flex gap-4 items-center"
                to={"/" + result.id}
              >
                <div>
                  <img src={result.img} alt="" className="w-[80px]" />
                </div>
                <div>
                  <h2 className="text-base font-semibold">{result.title}</h2>
                  <p className="text-sm">{result.description}</p>
                  <p className="text-sm">${result.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalSearch;
