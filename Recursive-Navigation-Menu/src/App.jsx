import Menu from "./Menu";
import "./App.css";
import { data } from "./data";

function App() {
  return (
    <>
      <Menu menus={data} />
    </>
  );
}

export default App;
