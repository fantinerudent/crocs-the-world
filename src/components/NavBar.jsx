import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="/crocs-list"> CROCS LIST </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
