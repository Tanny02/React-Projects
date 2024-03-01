import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Slider.css";

const Slider = ({ url, limit, page }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImage(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const iLength = image.length;

  const handlePrevious = () => {
    setCurrent(current === 0 ? iLength - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === iLength - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (url !== "") {
      fetchData(url);
    }
  }, [url]);

  if (loading) {
    return <h1>Loading data</h1>;
  } else if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="left btn" />
      {image &&
        image.map((item, index) => {
          const { id, download_url } = item;
          return (
            <img
              key={id}
              alt={download_url}
              src={download_url}
              className={
                current === index ? "current-image" : "current-image hide-image"
              }
            />
          );
        })}
      <BsArrowRightCircleFill onClick={handleNext} className="right btn" />
      <span className="circle-indicators">
        {image &&
          image.map((_, index) => (
            <button
              key={index}
              className={
                current === index
                  ? "current-indicators"
                  : "current-indicators hide-indicators"
              }
              onClick={() => setCurrent(index)}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default Slider;
