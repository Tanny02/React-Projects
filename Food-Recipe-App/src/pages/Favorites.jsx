import React, { useContext } from "react";
import { GlobalContext } from "../context";
import Recipe from "../components/Recipe";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <Recipe item={item} />)
      ) : (
        <div>
          <p>Nothing is added</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
