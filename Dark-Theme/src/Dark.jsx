import React from "react";
import "./Dark.css";
import useLocalStorage from "./useLocalStorage";

const Dark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="theme-container" data-theme={theme}>
      <h1>hello</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Dark;
