import React from 'react';
import { convert } from '../Products/ProductItem';

const CartBody = ({name,image,price}) => {
  return (
    <tr className="main-cart">
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" className="check-cart" id="select" />
          <label className="check-box" htmlFor="select"></label>
        </span>
      </td>
      <td>
        <div className="product__name">
          <img className="imgCart" src={image} alt="name" />
          <span className="name">{name}</span>
        </div>
      </td>
      <td>
        <span className="price">{convert.format(price)}</span>
      </td>
      <td>
        <div className="amount">
          <button className="minus" id="minus">
            {" "}
            <i className="fa-solid fa-minus"></i>
          </button>
          <input type="text" id="mount" value="1" />
          <button className="plus" id="plus">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <span className="totalProduct">10</span>
      </td>
      <td>
        <i className="fa-solid fa-trash text-danger cart__delete"></i>
      </td>
    </tr>
  );
};

export default CartBody;