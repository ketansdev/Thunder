import React from "react";


const Prime = React.memo(({primeNumber})=>{

    
  function calculatePrimeNumber() {
    let totalPrime = 0;

    if (primeNumber > 1) {
      totalPrime++;
    }

    for (let i = 3; i <= primeNumber; i++) {
      totalPrime++;
      for (let j = 2; j < i; j++) {
        if(i%j == 0){
            totalPrime--;
            break
        }
      }
    }
    return totalPrime;
  }

  const prime = calculatePrimeNumber()


    return(
        <>
            <h1>Total Prime Numbers are : {prime}</h1>
        </>
    )
})

export default Prime;