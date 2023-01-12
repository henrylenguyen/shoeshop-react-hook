import React, { memo, useEffect, useReducer } from "react";

import { initialState, reducer } from "../Reducer";
import { GetDataFromAPI } from "../GetAPI.js";
import ProductItem from "./ProductItem";
import { renderProduct } from "../Actions";

const Products = () => { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productList } = state;
  const handleRenderProduct = async () => {
    let data = await GetDataFromAPI();
    dispatch(renderProduct(data));
  };
  useEffect(() => {
    handleRenderProduct();
    return () => {};
  }, []);
  
  const handleAddCart = (id) => {
    // dispatch()
    console.log(id)
  }; 

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 product__list">
      {productList.map((item, index) => (
        <ProductItem
          key={item.id}
          image={item.img}
          name={item.name}
          category={item.category}
          price={item.price}
          onClick={() => handleAddCart(item)}
        ></ProductItem>
      ))}
    </div>
  );
};

export default Products;
