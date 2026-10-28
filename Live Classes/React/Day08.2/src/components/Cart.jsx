import { useContext } from "react";
import { CountContext } from "../App";
function Cart(){

    const {totalItems, price} = useContext(CountContext);

    return(
        <div>
            <h4>Total items : {totalItems}</h4>
            <h5>Total price : {price}</h5>
        </div>
    )
}

export default Cart;