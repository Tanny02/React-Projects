import React from "react";

const Suggestions = ({ data }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((result) => <li key={index}>{result}</li>)
        : null}
    </ul>
  );
};

export default Suggestions;
