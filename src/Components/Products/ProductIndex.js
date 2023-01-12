import React from 'react';

import Select from '../Home/Main/Select';
import Products from './Products';


const ProductIndex = () => {
  return (
    <section className="product">
      <div className="container">
        <h1 className="text-linear">Products</h1>
        <Select></Select>
        <Products></Products>
        <div className="view-product"></div>
      </div>
    </section>
  );
};

export default ProductIndex;