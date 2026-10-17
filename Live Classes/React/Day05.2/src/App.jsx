import { useMemo, useState } from "react";
import Sum from "./Sum";
// import Prime from "./Prime";

function App() {
  const [count, setCount] = useState(100);
  const [number, setNumber] = useState(100000);

  console.log("App Render");

  //   function calculatePrimeNumber() {
  //     let totalPrime = 0;

  //     if (number > 1) {
  //       totalPrime++;
  //     }

  //     for (let i = 3; i <= number; i++) {
  //       totalPrime++;
  //       for (let j = 2; j < i; j++) {
  //         if(i%j == 0){
  //             totalPrime--;
  //             break
  //         }
  //       }
  //     }
  //     return totalPrime;
  //   }

  //   const prime = calculatePrimeNumber()

  const prime = useMemo(() => {
    let totalPrime = 0;

    if (number > 1) {
      totalPrime++;
    }

    for (let i = 3; i <= number; i++) {
      totalPrime++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          totalPrime--;
          break;
        }
      }
    }
    return totalPrime;
  }, [number]);

  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Sum num={count} />
      <h2>Total Prime numbers are : {prime}</h2>
      {/* <Prime primeNumber = {number}/> */}
    </>
  );
}

export default App;
