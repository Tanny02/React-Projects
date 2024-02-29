import React from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleHover(index) {
    setHover(index);
  }

  function handleLeave() {
    setHover(rating);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHover(index)}
            onMouseLeave={() => handleLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Rating;
