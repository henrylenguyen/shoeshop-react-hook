import React, { useEffect, useRef, useState } from 'react';

const CartPage = () => {
  const [openCart, setOpenCart] = useState(false);
  const openref = useRef(null)
  useEffect(() => {
    function handleClickOutOpen(e) {
      if (openref && !openref.current.contains(e.target)) {
        // console.log("click outside");
        setOpenCart(!openCart);
      }
    }
    document.addEventListener("click", handleClickOutOpen);

    return () => {
      document.removeEventListener("click", handleClickOutOpen);
    };
  }, []);
  return (
    <div>
      <section
        className={openCart ? "cartPage" : "cartPage active"}
        ref={openref}
      >
        <div className="cartPage__content">
          <div className="cartPage__header">
            <h3>Giỏ hàng</h3>
            <i
              className="fas fa-x cartPage__close"
              onClick={() => setOpenCart(!openCart)}
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
                <tbody className="cart-body"></tbody>
              </table>
            </div>
            <div className="cartPage__total">
              <p className="total">
                Tổng tiền: <span id="totalProduct">1.000.000đ</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cartPage__footer">
          <button className="btn btn-danger btn-deleteCheck">Xóa</button>
          <button className="btn btn-success btn-paidCart">Thanh toán</button>
        </div>
      </section>
      <div
        className={openCart ? "cartPage__overlay" : "cartPage__overlay active"}
      ></div>
    </div>
  );
};

export default CartPage;