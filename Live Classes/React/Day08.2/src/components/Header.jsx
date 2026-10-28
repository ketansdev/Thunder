import Cart from "./Cart";

function Header(){

    return(
        <div style={{display : "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h1>This is my Header</h1>
            <Cart />
        </div>
    )
}

export default Header;