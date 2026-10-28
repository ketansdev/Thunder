import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const CountContext = createContext();

function App() {
  const [totalItems, setTotalItems] = useState(0);
  const [price, setPrice] = useState(0)
  return (
    <>
      <CountContext value={{totalItems, setTotalItems, price, setPrice}}>
        <Header />
        <Body />
        <Footer />
      </CountContext>
    </>
  );
}

export default App;
