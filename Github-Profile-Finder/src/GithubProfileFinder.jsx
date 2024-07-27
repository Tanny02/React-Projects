import React from "react";
import Profile from "./Profile";
import "./GithubProfileFinder.css";
import { useState, useEffect } from "react";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      data && setRepos(data);
      setLoading(false);
      setUsername("");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading data</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        name="search-username"
        placeholder="Enter a username"
        required
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />
      <button onClick={handleClick}>Search</button>
      {repos && <Profile user={repos} />}
    </div>
  );
};

export default GithubProfileFinder;
