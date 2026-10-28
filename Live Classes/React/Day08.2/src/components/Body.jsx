import Card from "./Card";

const products = [
    {id : 1, name : "apple", price : 200},
    {id : 2, name : "Redmi Note 16 pro", price : 25000},
    {id : 3, name : "Milk", price : 60},
    {id : 4, name : "cupboard", price : 30000},
    {id : 5, name : "laptop", price : 75000},
    {id : 6, name : "Eggs", price : 300}
]
function Body(){

    return(
        <>
            <h1>This is App Body</h1>
            <ul>
                <li>Electronics</li>
                <li>Accessories</li>
                <li>Home, Furniture and Appliances</li>
                <li>Health and Beauty</li>
            </ul>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap : "10px",}}>
                {
                products.map((p)=>{
                    return <Card p = {p} />
                })
            }
            </div>
        </>
    )
}

export default Body;