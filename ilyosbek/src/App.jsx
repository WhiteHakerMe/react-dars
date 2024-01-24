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
      {count.map((el) => (
        <Card key={el} {...el} />
      ))}
    </>
  );
}

export default App;
