import React from "react";
import { useState, useEffect } from "react";
import Suggestions from "./Suggestions";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setSearchResults(filteredData);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      data && setUsers(data.users.map((user) => user.firstname));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        name="search-users"
        onChange={handleChange}
      />
      {show && <Suggestions data={searchResults} />}
    </div>
  );
};

export default Search;
