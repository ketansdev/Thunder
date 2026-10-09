import { useState } from "react";

function App(){
  let [count, setCount] = useState(0);

  function incrementCount(){
    count++;
    setCount(count);
  }
  return(
    <>
      <h1>Counter : {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </>
  )
}
  
export default App;