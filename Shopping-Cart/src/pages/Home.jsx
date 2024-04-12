import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-lg">Loading...</div>
      ) : error ? (
        <div className="text-lg">Something went wrong</div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products &&
            products.length &&
            products.map((product) => <Product data={product} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
