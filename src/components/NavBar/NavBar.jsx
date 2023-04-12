import { CartContext } from "../../App";
import { useContext, useState } from "react";
const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [cartListStatus, setCartListStatus] = useState(false);
  const openCartList = () => {
    setCartListStatus(!cartListStatus);
  };
  return (
    <>
      <nav id="nav-bar">
        <ul>
          <li> HOME</li>
          <li> SHOP </li>
          <li onClick={openCartList}> 🛒 </li>
        </ul>
      </nav>
      {cartListStatus ? (
        <div className="container-cart">
          {cart.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
