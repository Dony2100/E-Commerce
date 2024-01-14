import React, {useContext, useEffect, useState} from "react";
import {FaBars, FaMoon, FaShoppingCart, FaSun} from "react-icons/fa";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {ProductsContext} from "../../context/ProductsProvider/ProductsProvider";
import "./nav.css";

const Nav = () => {
  const {cart, products} = useContext(ProductsContext);
  const [cartLen, setCartLen] = useState(0);

  useEffect(() => {
    const cartKeys = Object.keys(cart);

    const fff = cartKeys.filter((id) => {
      return cart[id];
    });

    setCartLen(fff.length);
  }, [cart]);

  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(
    JSON.parse(window.localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    window.localStorage.setItem("theme", theme);

    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`nav container ${toggle ? "nav__mobile" : ""} `}>
      <div className="nav__image">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/*  */}
      <ul className="nav__links">
        <li>
          <Link to={"/categories"}>CATEGORIES</Link>
        </li>
        <li>
          <Link className="cartLenLink" to={"/cart"}>
            {" "}
            <p className="cartLen">{cartLen}</p>
            <FaShoppingCart />
          </Link>
        </li>
        <li onClick={() => setTheme(theme == true ? false : true)}>
          {theme ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
      {/*  */}
      <ul
        className={`${toggle ? "nav__links__mobile" : "nav__links__disabled"}`}
      >
        <li>
          <Link to={"/categories"}>CATEGORIES</Link>
        </li>
        <li>
          <Link className="cartLenLink" to={"/cart"}>
            {" "}
            <p className="cartLen">{cartLen}</p>
            <FaShoppingCart />
          </Link>
        </li>
        <li onClick={() => setTheme(theme == true ? false : true)}>
          {theme ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
      <FaBars
        className={`nav__bar ${toggle ? "open" : ""}`}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
};

export default Nav;
