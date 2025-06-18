import React, { useState ,useContext} from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.avif";
import cart_icon from "../../assets/cart_icon.png";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  
  const [menu,setMenu]=useState("home")
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>N Mart</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("home")}>
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Home
          </Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" style={{ textDecoration: "none", color: "#626262" }}>
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      

      <div className="nav-login-cart">
        <Link to="/cart"><img src={cart_icon} alt="" height="40px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          
        {jwtToken ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
          
        )}

      </div>
    </div>
  );
};

export default Navbar;
