const items = [
  { id: 1, name: "Laptop", price: 70000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Bag", price: 500 },
  { id: 4, name: "Milk", price: 50 },
  { id: 5, name: "Cake", price: 300 },
  { id: 6, name: "Eggs", price: 200 },
];

function Body() {
  return (
    <>
      <h2>This is App Body</h2>
      <ul>
        <li>Electonic</li>
        <li>Home and Appliances</li>
        <li>Beverages</li>
        <li>Grocery</li>
        <li>Heath and Medical</li>
        <li>Bakery</li>
      </ul>

      <div>
        {items.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  );
}

export default Body;
