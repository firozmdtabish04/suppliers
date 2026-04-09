import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const value = search.toLowerCase();
    if (value.includes("hall")) navigate("/hall");
    else navigate("/price");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
      <input
        type="text"
        placeholder="Search cement, steel, hall..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded w-full sm:w-80 text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 px-6 py-2 rounded text-black font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
