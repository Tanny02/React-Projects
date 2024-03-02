import React from "react";
import "./Menu.css";
import { useState, useEffect } from "react";
import MenuList from "./MenuList";

const Menu = ({ menus = [] }) => {
  return (
    <div className="menu">
      <MenuList list={menus} />
    </div>
  );
};

export default Menu;
