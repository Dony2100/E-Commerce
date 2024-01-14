import React, {useContext} from "react";
import Title from "../../../components/Title/Title.jsx";
import ProductCard from "../../../components/productCard/ProductCard";
import {ProductsContext} from "../../../context/ProductsProvider/ProductsProvider";
import "./proudProducts.css";
const ProudProducts = () => {
  const {products} = useContext(ProductsContext);

  let content;

  if (products) {
    content = products?.map((item, idx) => {
      return <ProductCard key={idx} item={item} />;
    });
  }

  return (
    <div className="proudProducts section__margin">
      <Title title={"Products We Are Proud Of"} />
      <div className="proudProducts__container">{content}</div>
    </div>
  );
};

export default ProudProducts;
