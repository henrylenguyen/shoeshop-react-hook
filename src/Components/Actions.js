import { RENDER_PRODUCT,ADD_CART } from "./Constaint";
// Tạo action

export const renderProduct = (payload) => {
  return {
    type: RENDER_PRODUCT,
    payload,
  };
};
export const addToCard = (payload)=>{
  return {
    type: ADD_CART,
    payload,
  };
}
// export const openCart = (payload)=>{
//   return {
//     type: OPEN_CART,
//     payload,
//   };
// }
