import React from "react";
import "./Search.css";

const Search = ({ search, setSearch, handleClick }) => {
  return (
    <div className="input">
      <input
        type="text"
        name="search"
        autoComplete="off"
        value={search}
        placeholder="Enter City Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
