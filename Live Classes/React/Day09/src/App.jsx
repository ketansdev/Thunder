import { useState } from "react";

function App() {
  const [fruit, setFruit]= useState(["Apple", "Orange", "Banana", "Watermelon"]);

  function handleFruit(){
    setFruit([...fruit, "Mango"])
  }

  return (
    <>
      <ul>
        {
          fruit.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={handleFruit}>Add Fruit</button>
    </>
  );
}

export default App;
