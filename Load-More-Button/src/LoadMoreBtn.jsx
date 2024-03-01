import React, { useState, useEffect } from "react";
import "./Load.css";

const LoadMoreBtn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) {
    return <h1>Loading data</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <button disabled={disabled} onClick={() => setCount(count + 1)}>
        Load More
      </button>
      {disabled ? <p>You have reached the limit of 100 products</p> : null}
    </div>
  );
};

export default LoadMoreBtn;
