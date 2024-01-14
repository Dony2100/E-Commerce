import React, {useContext, useState} from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import {ProductsContext} from "../../../context/ProductsProvider/ProductsProvider";
import "./products.css";
const Products = () => {
  const {filteredProducts} = useContext(ProductsContext);

  let content;
  if (filteredProducts) {
    content = filteredProducts?.map((item) => {
      return <ProductCard key={item.id} item={item} />;
    });
  }

  return <div className="products section__margin">{content}</div>;
};

export default Products;
