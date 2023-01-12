import React from 'react';
import CartPage from '../../Cart/CartPage';
import ProductIndex from '../../Products/ProductIndex';

import Carousel from '../Header/Carousel';


const Main = () => {
  return (
    <main>
      <Carousel></Carousel>
      <ProductIndex></ProductIndex>
      <CartPage></CartPage>
    </main>
  );
};

export default Main;