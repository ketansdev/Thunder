import { useState, useContext } from "react";
import { CountContext } from "../App";

function Card({ p }) {
  const [add, setAdd] = useState(false);
  const { setPrice, setTotalItems } = useContext(CountContext);

  function handleClick() {
    if (add) {
      setAdd(false);
      setPrice((prev) => prev - p.price);
      setTotalItems((prev) => prev - 1);
    } else {
      setAdd(true);
      setPrice((prev) => prev + p.price);
      setTotalItems((prev) => prev + 1);
    }
  }
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h3>Product name : {p.name}</h3>
      <p>Price : {p.price}</p>
      <button onClick={handleClick}>{add ? "Remove" : "Add"}</button>
    </div>
  );
}

export default Card;
