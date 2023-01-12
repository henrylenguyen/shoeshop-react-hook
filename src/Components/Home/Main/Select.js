import React from 'react';

const Select = () => {
  return (
    <div>
      <select className="product__select" id="product__select">
        <option defaultValue={"All"}>All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>
      <select className="price__select" id="price__select">
        <option defaultValue={"All"}>Giá</option>
        <option value="PriceDown">Giá từ cao đến thấp</option>
        <option value="PriceUp">Giá từ thấp đến cao</option>
      </select>
    </div>
  );
};

export default Select;