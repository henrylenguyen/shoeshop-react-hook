import React, { useState } from "react";
import CartPage from "../../Cart/CartPage";
import ProductIndex from "../../Products/ProductIndex";

import Carousel from "../Header/Carousel";


const Main = (props) => {
  const [temp, setTemp] = useState([])
  const handleAddCart = (id) => {
    setTemp(id)
    
  }; 
  // console.log(temp);
  return (
    <main>
      <Carousel></Carousel>
      <ProductIndex
        onclick={handleAddCart}
        deleteCart={props.deleteCart}
        deleteIndex={props.deleteIndex}
      ></ProductIndex>
      <CartPage
        addCart={temp}
        handle={props.handle}
        open={props.open}
        deleteCart={props.deleteCart}
      ></CartPage>
    </main>
  );
};

export default Main;
