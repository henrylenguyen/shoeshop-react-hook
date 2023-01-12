import React, { Children } from 'react';

 let convert = new Intl.NumberFormat("it-IT", {
   style: "currency",
   currency: "VND",
 });

const ProductItem = (
 props
) => {
  return (
    <div className=" col-md-6 col-lg-4">
      {/* {console.log(props)} */}
      <div className="product__card">
        <div className="product__card-item" data-view="{item.id}">
          <div className="product__card-img">
            <img
              className="zoom"
              id="image"
              src={props.image}
              alt={props.name}
            />
          </div>
          <div className="product__card-body">
            <div div className="d-flex flex-column justify-content-between ">
              <h3>{props.name}</h3>
              <div className="text-group">
                <h4 className="product__card-text">{props.category}</h4>
                <p className="product__card-price">
                  {convert.format(props.price)}
                </p>
              </div>
            </div>
            <div className="btn-group d-flex justify-content-between align-items-center">
              <button
                className="btn_primary add-cart"
                // data-id={item.id}
                type="button"
                onClick={props.onClick}
              >
                Add to cart
              </button>
              <i className="fa-regular fa-heart add-like"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;