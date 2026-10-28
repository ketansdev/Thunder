import { useState, useCallback } from "react";

function Call() {
  const [count, setCount] = useState(1);

  //   function handleDisplay() {
  //     console.log("Hello React", count);
  //   }

  const handleDisplay = useCallback(() => {
    console.log("Hello React", count);
  }, []);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDisplay}>Console</button>
    </>
  );
}

export default Call;
