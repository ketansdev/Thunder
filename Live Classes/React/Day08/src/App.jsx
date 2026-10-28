import Counter from "./components/Counter";
import Header from "./components/Header";

import { useState, createContext } from "react";

export const CountContext = createContext()

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext value = {{count, setCount}}>
        <h1>This is my App</h1>
        <Header />
        <Counter />
      </CountContext>
    </>
  );
}

export default App;
