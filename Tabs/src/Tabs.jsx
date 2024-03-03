import React from "react";
import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [current, setCurrent] = useState(null);

  const handleClick = (index) => {
    setCurrent(index);
    onChange(index);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div
            className={`tab-item ${current === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={tab.label}
          >
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[current] && tabsContent[current].content}
      </div>
    </div>
  );
};

export default Tabs;
