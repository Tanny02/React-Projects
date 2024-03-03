import Popup from "./Popup";
import { useState } from "react";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);

  const handleToggle = () => {
    setPopup(true);
  };

  const close = () => {
    setPopup(false);
  };
  return (
    <>
      <button onClick={handleToggle}>{popup ? null : "Open Popup"}</button>
      {popup && <Popup close={close} />}
    </>
  );
}

export default App;
