import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((result) => (
            <li key={index} onClick={handleClick}>
              {result}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
