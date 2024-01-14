import {useContext, useEffect, useState} from "react";
import Title from "../../../components/Title/Title";
import {ProductsContext} from "../../../context/ProductsProvider/ProductsProvider";
import "./filter.css";
const categoires = [
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];

const Filter = () => {
  const {setFilter, filter} = useContext(ProductsContext);
  const [chooseFilter, setChoosenFilter] = useState("");

  useEffect(() => {
    setFilter("");
    setChoosenFilter("");
  }, []);

  return (
    <div className="filter ">
      {categoires?.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              setChoosenFilter(item);
              setFilter(item);
              if (item == filter) {
                setFilter("");
                setChoosenFilter("");
              }
            }}
            className={`${
              chooseFilter == item ? "activeBtn filterBtn" : "filterBtn"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
