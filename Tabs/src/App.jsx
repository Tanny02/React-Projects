import React from "react";
import Tabs from "./Tabs";
import { data } from "./data";
import "./App.css";

function App() {
  const handleChange = (current) => {
    console.log(current);
  };

  return <Tabs tabsContent={data} onChange={handleChange} />;
}

export default App;
