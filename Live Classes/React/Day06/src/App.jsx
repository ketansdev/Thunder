import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [interValId, setIntervalId] = useState(null);

  function handlePlay() {
    if (interValId != null) return;
    const intId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    setIntervalId(intId);
  }

  function handleStop() {
    clearInterval(interValId);
    setIntervalId(null);
  }


  function handleReset(){
    clearInterval(interValId);
    setIntervalId(null);
    setTime(0);
  }
  return (
    <>
      <h1>Stopwatch : {time}</h1>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
