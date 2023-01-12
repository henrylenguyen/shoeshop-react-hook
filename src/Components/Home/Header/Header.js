import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <header className="header">
    <div className="navbar">
      <div className="container">
        <div className="navbar__left">
          <img src="/icons/icon1.png" alt="icon"/>
        </div>
        <Nav></Nav>
        <div className="navbar__right">
          <div className="cart">
            <img src="/icons/bag.png" alt="bag"/>
            <span className="quantityOfProducts">2</span>
          </div>
        </div>
        <div className="search">
          <div className="search__group">
            <input placeholder="Tìm kiếm sản phẩm" type="text" className="search__input"/>
            <button type="submit" className="btn__search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;