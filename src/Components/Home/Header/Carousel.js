import React from "react";

const Carousel = () => {
  return (
    <section
      className="carousel"
      style={{
        background: "url(/bg1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container carousel__content">
        <nav className="carousel__navbar">
          <ul className="carousel__navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Delivery
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                pakaging
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                faq
              </a>
            </li>
          </ul>
        </nav>
        <div className="carousel__text">
          <img src="/Nike_Logo.png" alt="Nike_Logo" />
          <h1>
            <span>Boring</span>
            <br />
            shoes?
          </h1>
          <h3>Let Us HELP you fix it..</h3>
          <button className="btn_primary">Explore our store</button>
        </div>
        <div className="carousel__image">
          <img src="/shoe1.png" alt="shoe1" />
          <div className="carousel__price">
            <i className="fa-solid fa-angle-left"></i>
            <div className="carousel__price--addCart">
              <h3>Nike air max III</h3>
              <p>$189</p>
              <button className="btn_second">Buy Now</button>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
