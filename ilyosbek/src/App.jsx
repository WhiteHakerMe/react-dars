import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState([]);

  async function getData() {
    return await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => setCount(json));
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log(count);

  return (
    <>
      <div className="  flex flex-wrap justify-center gap-8 mt-20 mb-20">
        {count.map((el) => (
          <Card key={el} {...el} />
        ))}
      </div>
    </>
  );
}

export default App;
