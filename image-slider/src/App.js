import Slider from "./Slider";
import "./App.css";

function App() {
  return (
    <>
      <Slider url={"https://picsum.photos/v2/list"} page={"8"} limit={"10"} />
    </>
  );
}

export default App;
