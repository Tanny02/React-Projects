import React from "react";
import { useState, useEffect } from "react";
import "./Scroll.css";

const Scroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scroll, setScroll] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      data && data.products && data.products.length > 0
        ? setData(data.products)
        : null;
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((scrollTop / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <h1>Loading data</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  }

  console.log(scroll);
  return (
    <div>
      <div className="top-container">
        <h1>Scroll Bar</h1>
        <div className="scroll-container">
          <div className="progress" style={{ width: `${scroll}%` }}></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => (
              <div key={item.id} className="product">
                <h3>{item.title}</h3>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Scroll;
