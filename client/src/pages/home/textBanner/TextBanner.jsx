import React from "react";
import "./textBanner.css";
const TextBanner = ({dir, img, title, text}) => {
  const style = {
    flexDirection: dir == "ltr" ? "row-reverse" : "row",
  };

  return (
    <div className="textBanner section__margin" style={style}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>SHOP NOW</button>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default TextBanner;
