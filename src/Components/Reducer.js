import { RENDER_PRODUCT,ADD_CART } from "./Constaint";

// Khởi tạo biến
export const initialState = {
  productList: [],
  CartList: [],
  OpenCart: false
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
    // case OPEN_CART:
    //   return {
    //     ...state,
    //     OpenCart: false
    //   };
    default:
      throw new Error("Lỗi");
  }
};
