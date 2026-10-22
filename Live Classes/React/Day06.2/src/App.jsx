import { useRef, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const intervalIdRef = useRef(null);

  function handleStart() {
    if (intervalIdRef.current != null) return;
    intervalIdRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTimer(0)
  }
  return (
    <>
      <h1>Stopwatch : {timer}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
