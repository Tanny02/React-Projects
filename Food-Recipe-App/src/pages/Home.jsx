import React, { useContext } from "react";
import { GlobalContext } from "../context";
import Recipe from "../components/Recipe";

const Home = () => {
  const { data, loading, error } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {data && data.length > 0 ? (
        data.map((item) => <Recipe item={item} />)
      ) : (
        <div>
          <p>Search a recipe and get started</p>
        </div>
      )}
    </div>
  );
};

export default Home;
