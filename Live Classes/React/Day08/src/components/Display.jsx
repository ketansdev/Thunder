import { useContext } from "react";
import { CountContext } from "../App";

function Display() {
  const { count } = useContext(CountContext);

  return (
    <>
      <h1>This is Display : {count}</h1>
    </>
  );
}

export default Display;
