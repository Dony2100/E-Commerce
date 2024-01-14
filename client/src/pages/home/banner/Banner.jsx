import React from "react";
import img1 from "../../../assets/images/electronics.jpeg";
import img3 from "../../../assets/images/kitchen.jpeg";
import img2 from "../../../assets/images/livingRoom.jpeg";
import img4 from "../../../assets/images/skinCare.jpeg";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className=" hover__effect">
        <img src={img2} alt="Live Comfortably" />
        <span>Live Comfortably</span>
      </div>
      <div className=" hover__effect">
        <img src={img4} alt="Live Comfortably" />
        <span>Skin Care</span>
      </div>

      <div className="banner__two-rows hover__effect">
        <div>
          <img src={img3} alt="Live Comfortably" />
          <span>Kitchen</span>
        </div>
        <div>
          <img src={img1} alt="Live Comfortably" />
          <span>Electronics</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
