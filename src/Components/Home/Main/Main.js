import React, { useState } from "react";
import CartPage from "../../Cart/CartPage";
import ProductIndex from "../../Products/ProductIndex";

import Carousel from "../Header/Carousel";

const Main = (props) => {
  const [temp, setTemp] = useState([])
  const handleAddCart = (id) => {
    setTemp(id)
    
  }; 
  console.log(temp);
  return (
    <main>
      <Carousel></Carousel>
      <ProductIndex onclick={handleAddCart}></ProductIndex>
      <CartPage
        addCart={temp}
        handle={props.handle}
        open={props.open}
      ></CartPage>
    </main>
  );
};

export default Main;
