import React, { useEffect, useRef, useState } from "react";
import CartBody from "./CartBody";

const CartPage = (props) => {
  // console.log(props);
  const closeref = useRef(null);
  useEffect(() => {
    // function handleClickOutclose(e) {
    //   if (closeref && !closeref.current.contains(e.target)) {
    //     console.log("click outside");
    //     // setCloseCart(!closeCart);
    //   }
    // }
    // document.addEventListener("click", handleClickOutclose);
    // return () => {
    //   document.removeEventListener("click", handleClickOutclose);
    // };
  }, []);
  return (
    <div>
      <section className={props.open ? "cartPage active" : "cartPage"}>
        <div className="cartPage__content">
          <div className="cartPage__header">
            <h3>Giỏ hàng</h3>
            <i
              className="fas fa-x cartPage__close"
              onClick={() => props.handle()}
            ></i>
          </div>
          <div className="cartPage__body">
            <div className="cartPage__list">
              <table>
                <thead>
                  <tr className="header-cart">
                    <th>
                      <div className="custom-checkbox">
                        <input type="checkbox" id="SelectAll" />
                        <label
                          htmlFor="SelectAll"
                          className="check-box"
                        ></label>
                      </div>
                    </th>
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th style={{ width: "16%" }}>Số lượng</th>
                    <th style={{ width: "18%" }}>Thành tiền</th>
                    <th style={{ width: "15%" }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody className="cart-body">
                  {props.addCart.map((item, index) => (
                    <CartBody
                      key={item.id}
                      image={item.img}
                      name={item.name}
                      price={item.price}
                      deleteCart={()=>props.deleteCart(index)}
                    ></CartBody>
                  ))}
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
       
      </section>
      <div
        className={
          props.open ? "cartPage__overlay active" : "cartPage__overlay"
        }
        ref={closeref}
      ></div>
    </div>
  );
};

export default CartPage;
