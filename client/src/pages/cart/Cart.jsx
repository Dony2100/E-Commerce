import React, {useContext, useEffect, useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";
import {ProductsContext} from "../../context/ProductsProvider/ProductsProvider";
import "./cart.css";
const Cart = () => {
  const {cart, products, addToCart, removeFromCart, totalPrice} =
    useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const updatedCartItems = Object.keys(cart)
      .filter((productId) => {
        return cart[productId];
      })
      .map((productsId) => {
        const product = products.find((item) => item.id == productsId);

        if (product) {
          product.quantity = cart[productsId];
        }

        return product;
      });

    setCartProducts(updatedCartItems);
  }, [cart, products]);

  let content;
  if (cartProducts?.length) {
    content = cartProducts?.map((item, idx) => {
      return (
        <div key={idx} className="cart__item ">
          <img src={item.image} />
          <div className="cart__item__text">
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <p>PCs: {item.quantity}</p>

            <div className="cart__item__text__cta">
              {<FaPlus onClick={() => addToCart(item.id, 1)} />}
              <p className="productPage__title__quantity">{item.quantity}</p>
              {<FaMinus onClick={() => removeFromCart(item.id)} />}
            </div>
            <p className="mt-4 underline ">
              Total : {Math.round(item.quantity * item.price)}$
            </p>
          </div>
        </div>
      );
    });
  }

  const handlePayment = () => {
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartProducts,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({url}) => {
        console.log(url);
        window.location = url;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cart">
      {content}

      <h1 className="cart__totalPrice">TOTAL PRICE: {totalPrice()}$</h1>

      <button className="cart__buy_now" onClick={() => handlePayment()}>
        BUY NOW
      </button>
    </div>
  );
};

export default Cart;
