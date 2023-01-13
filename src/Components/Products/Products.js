import React, { memo, useEffect, useReducer } from "react";

import { initialState, reducer } from "../Reducer";
import { GetDataFromAPI } from "../GetAPI.js";
import ProductItem from "./ProductItem";
import { renderProduct, addToCard } from "../Actions";

const Products = (props) => { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { productList, CartList } = state;
  const handleRenderProduct = async () => {
    let data = await GetDataFromAPI();
    dispatch(renderProduct(data));
  };
  useEffect(() => {
    handleRenderProduct();
    return () => {};
  }, []);
  // console.log(CartList);
  props.onclick(CartList);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 product__list">
      {productList.map((item, index) => (
        <ProductItem
          key={item.id}
          image={item.img}
          name={item.name}
          category={item.category}
          price={item.price}
          onClick={() => dispatch(addToCard(item))}
        ></ProductItem>
      ))}
    </div>
  );
};

export default Products;
