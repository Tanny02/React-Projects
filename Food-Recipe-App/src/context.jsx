import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(search);
    setSearch("");
  };

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${param}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setData(data?.data?.recipes);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  const handleFavs = (current) => {
    let favs = [...favorites];
    const index = favs.findIndex((item) => item.id === current.id);
    if (index === -1) {
      favs.push(current);
    } else {
      favs.splice(index);
    }
    setFavorites(favs);
  };

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        loading,
        error,
        handleSubmit,
        data,
        recipeDetails,
        setRecipeDetails,
        favorites,
        handleFavs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
