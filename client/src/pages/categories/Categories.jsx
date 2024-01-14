import React from "react";
import {Filter, Products} from "../imports";
import "./categories.css";
const Categories = () => {
  return (
    <div className="relative categories">
      <Filter />
      <Products />
    </div>
  );
};

export default Categories;
