import {createContext, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

export const ProductsContext = createContext(null);

const ProductsProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) ?? {}
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const product = await res.json();

        setProducts(product);
        setFilteredProducts(product);
        setIsLoading(false);
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  let content;

  if (isLoading) {
    content = <Spinner />;
  }

  useEffect(() => {
    const newProducts = products.filter((item) => {
      return item.category == filter;
    });
    setFilteredProducts(newProducts);

    if (filter === "") {
      setFilteredProducts(products);
    }
  }, [filter]);

  useEffect(() => {
    const initializeCart = () => {
      let cartObj = {};

      if (window.localStorage.getItem("cart")) {
        return;
      }

      products.forEach((product) => {
        cartObj[product.id] = 0;
      });

      setCart(cartObj);
    };

    if (products.length > 0) {
      initializeCart();
    }
  }, [products]);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, quantity) => {
    console.log(cart);
    console.log(id);
    console.log(quantity);
    setCart((prev) => {
      if (prev.hasOwnProperty(id)) {
        return {...prev, [id]: prev[id] + quantity};
      } else {
        // If the product is not in the cart, add it with the specified quantity
        return {...prev, [id]: quantity};
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      if (prev[id] == 0) {
        return prev;
      } else {
        return {...prev, [id]: prev[id] - 1};
      }
    });
  };

  const totalPrice = () => {
    let total = 0;

    for (let i = 0; i < Object.keys(cart).length; i++) {
      const productId = Object.keys(cart)[i];
      const quantity = cart[productId];
      const product = products.find((item) => item.id == productId);

      if (product && quantity) {
        total += Math.round(product?.price * quantity);
      }
    }
    return total;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        setFilter,
        filter,
        cart,
        removeFromCart,
        addToCart,
        totalPrice,
      }}
    >
      {content ? content : children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
