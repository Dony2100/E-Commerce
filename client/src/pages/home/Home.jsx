import React, {useContext} from "react";
import ltr from "../../assets/images/ltr.jpg";
import rtl from "../../assets/images/rtl.jpg";
import {Banner, ProudProducts, TextBanner, TrendingProducts} from "../imports";
const Home = () => {
  return (
    <div>
      <Banner />
      <ProudProducts />
      <TextBanner
        img={rtl}
        dir={"rtl"}
        title={"Creative harmonious living"}
        text={
          "RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        }
      />
      <TrendingProducts />

      <TextBanner
        img={ltr}
        dir={"ltr"}
        title={"Comfortable & Elegante Living"}
        text={
          "RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        }
      />
    </div>
  );
};

export default Home;
