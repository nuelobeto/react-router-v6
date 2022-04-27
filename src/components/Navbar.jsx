import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main_nav">
      <div className="nav_container">
        <h1 className="logo">Logo</h1>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
