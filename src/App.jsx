import "./App.css";
import React, { useState } from "react";
import CrocsList from "./components/CrocsList/CrocsList";
import NavBar from "./components/NavBar/NavBar";

export const CartContext = React.createContext();

function App() {
  const [cart, updateCart] = useState([]);

  function setNewCart(croc) {
    if (cart.includes(croc)) {
      let index = cart.indexOf(croc);
      let newCart = cart.splice(index, 1);
      updateCart(newCart);
    } else {
      updateCart([...cart, croc]);
    }
  }

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setNewCart }}>
        <NavBar />
        <CrocsList />
      </CartContext.Provider>
    </div>
  );
}

export default App;
