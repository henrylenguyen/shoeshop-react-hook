import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Home = () => {
  const [OpenCart, setOpenCart] = useState(false);
  const handleClick = () => {
    setOpenCart(!OpenCart);
  };
  return (
    <div>
      <Header click={handleClick}></Header>
      <Main handle={handleClick} open={OpenCart}></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
