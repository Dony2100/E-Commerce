import {motion} from "framer-motion";
import React, {useContext, useEffect, useRef, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Title from "../../../components/Title/Title";
import ProductCard from "../../../components/productCard/ProductCard";
import {ProductsContext} from "../../../context/ProductsProvider/ProductsProvider";
import "./trendingProducts.css";

const TrendingProducts = () => {
  const {products} = useContext(ProductsContext);
  const outer = useRef();
  const [width, setWidth] = useState(0);

  let content;
  if (products.length) {
    content = products?.slice(10, 20)?.map((item, idx) => {
      return <ProductCard item={item} key={idx} />;
    });
  }

  useEffect(() => {
    setWidth(outer.current.scrollWidth - outer.current.clientWidth);
  }, [outer]);

  return (
    <div className="trendingProducts section__margin">
      <Title title={"Trending Products"} />
      <div ref={outer} className="trending__outer">
        <motion.div
          drag={"x"}
          dragConstraints={{left: width * -1, right: 0}}
          whileTap={{cursor: "grabbing"}}
          className="trending__inner"
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default TrendingProducts;
