import { useRef } from "react";

function Counter(){
    const countRef = useRef(0);

    function handleIncrease(){
        countRef.current++;
        console.log(countRef.current)
    }

    function handleDecrease(){
        countRef.current--;
        console.log(countRef.current)
    }
    return(
        <>
            <h1>Counter : {countRef.current}</h1>
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
                <button>Reset</button>
            </div>
        </>
    )
}

export default Counter;