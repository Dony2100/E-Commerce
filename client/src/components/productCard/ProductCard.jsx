import {motion} from "framer-motion";
import React from "react";
import {Link} from "react-router-dom";
import "./productCard.css";
const ProductCard = ({item}) => {
  return (
    <div className="product__card">
      <Link to={`/product/${item.id}`}>
        <img src={item?.image} alt={item?.description} />
        <h3>{item?.title.slice(0, 30)}...... </h3>
        <h4>{item?.price}$</h4>
      </Link>
    </div>
  );
};

export default ProductCard;
