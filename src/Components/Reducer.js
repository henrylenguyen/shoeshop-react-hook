import { RENDER_PRODUCT,ADD_CART,DELETE_CART } from "./Constaint";

// Khởi tạo biến
export const initialState = {
  productList: [],
  CartList: [],
};

// Tạo reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case RENDER_PRODUCT:
      return {
        ...state,
        productList: action.payload,
      };
    case ADD_CART:
      return {
        ...state,
        CartList: [...state.CartList, action.payload],
      };
    case DELETE_CART:
      const newCart = [...state.CartList];
      newCart.splice(action.payload, 1);
      return {
        ...state,
        CartList: newCart,
      };
    default:
      throw new Error("Lỗi");
  }
};
