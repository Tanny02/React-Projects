import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [display, setDisplay] = useState({});

  const handleToggle = (label) => {
    setDisplay({ ...display, [label]: !display[label] });
  };
  return (
    <li>
      <div className="item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)}>
            {display[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
