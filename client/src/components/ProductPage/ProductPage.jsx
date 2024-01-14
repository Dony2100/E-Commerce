import React, {useContext, useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {ProductsContext} from "../../context/ProductsProvider/ProductsProvider";
import "./productPage.css";
const ProductPage = () => {
  const [quantity, setQunatity] = useState(0);
  const {id} = useParams();

  const {products, addToCart} = useContext(ProductsContext);
  let item;
  if (products) {
    item = products.filter((item) => {
      return item.id == id;
    });
  }
  let content;
  if (item[0]) {
    content = (
      <div className="productPage">
        <img src={item[0]?.image} alt={item[0].title} />
        <div className="productPage__text">
          <h2 className="productPage__title__heading">{item[0].title}</h2>
          <h4 className="productPage__title__description">
            {item[0].description}
          </h4>
          <div className="productPage__text__buttons">
            <p className="productPage__title__price">{item[0].price}$</p>
            {<FaPlus onClick={() => setQunatity((prev) => prev + 1)} />}
            <p className="productPage__title__quantity">{quantity}</p>
            {
              <FaMinus
                onClick={() =>
                  setQunatity((prev) => (prev == 0 ? 0 : prev - 1))
                }
              />
            }
          </div>
          <div className="productPage__text__cta">
            <div onClick={() => addToCart(id, quantity)} className="addToCart">
              <p>Add To Cart</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default ProductPage;
