import { useRef } from "react";
import "./App.css";
import useFetch from "./useFetch";
import useSize from "./useSize";

function App() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  const size = useSize();
  const { width, height } = size;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const bottomRef = useRef(null);

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <div>
        {loading ? <h3>Loading</h3> : null}
        {error ? <h3>Error</h3> : null}
        {data && data.products && data.products.length
          ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
          : null}
      </div>
      <div>
        <h1>width : {width}</h1>
        <h1>height : {height}</h1>
      </div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
    </>
  );
}

export default App;
