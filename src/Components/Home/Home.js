import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Home = () => {
  const [OpenCart, setOpenCart] = useState(false);
  const [deleteCart, setdeleteCart] = useState(null);
  const deleteProduct = (params) => {
    setdeleteCart(params);
  };
  const handleClick = () => {
    setOpenCart(!OpenCart);
  };
  // console.log(deleteCart);
  return (
    <div>
      <Header click={handleClick}></Header>
      <Main
        handle={handleClick}
        open={OpenCart}
        deleteCart={deleteProduct}
        deleteIndex={deleteCart}
      ></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
