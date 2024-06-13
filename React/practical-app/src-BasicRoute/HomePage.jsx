import React from "react";
import Header from "./Component/HeaderFile.jsx";
import Footer from "./Component/FooterFile.jsx";
import Slider from "./Component/SliderFile.jsx";
import Products from "./Component/Products.jsx";
import StateExample from "./Examples/StateExample.jsx";

const HomePage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <Products />
        <StateExample />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
