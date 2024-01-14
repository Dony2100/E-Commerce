import React from "react";
import {Route, Routes} from "react-router-dom";
import "./app.css";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import Nav from "./components/nav/Nav";
import ProductsProvider from "./context/ProductsProvider/ProductsProvider.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Categories from "./pages/categories/Categories.jsx";
import Home from "./pages/home/Home.jsx";
const App = () => {
  return (
    <ProductsProvider>
      <div className="content container">
        <div className="app__container ">
          <Nav />
        </div>

        <div className="app__holder">
          <Routes>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </ProductsProvider>
  );
};

export default App;
