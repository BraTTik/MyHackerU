import { createReducer } from "redux-act";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import * as actions from "./actions";


const initialState = {
  cart: {items:[], totalItems: 0,},
  isMobile: true,
  favorite: [],
  goods: [],
  productPageCounter: 1,
  categoryId: 0,
  colorId: 0,
  shopModal:{isShown: false, goodName: null}
};


const rootReducer = createReducer(
  {
    [actions.updateCart]: (state, payload) => ({...state, cart: payload }),
    [actions.updateGoods]: (state, payload) => ({...state, goods: payload }),
    [actions.updateCartCounter]: (state, payload) => {
      const filtered = state.cart.items.filter(item => item.id == payload.id);
      filtered[0].cnt = payload.cnt;
      return {
        ...state,
        cart: {...state.cart, items: [...state.cart.items]}
      };
    },
    [actions.deleteCartItem]: (state, payload) => {
      const filtered = state.cart.items.filter(item => item.id != payload.id);
      return {
        ...state,
        cart:{...state.cart, items:[...filtered] }
      };
    },
    [actions.updateCartTotalItems]: (state) => {
      const total = state.cart.items.reduce((total, item) => total + item.cnt, 0);
      return{...state, cart:{...state.cart, totalItems: total }}
    },
    [actions.updateIsMobile]: (state, payload) => ({...state, isMobile: payload}),
    [actions.updateProductPageCounter]: (state, payload) => ({...state, productPageCounter: payload}),
    [actions.updateProductPageId]: (state, payload) => ({...state, productPageId: payload}),
    [actions.updateCategoryId]: (state, payload) => ({...state, categoryId: payload}),
    [actions.updateColorId]: (state, payload) => ({...state, colorId: payload}),
    [actions.updateSortFunc]: (state, payload) => ({...state, sortFunc: payload }),
    [actions.updatePriceFilter]: (state, payload) => ({...state, priceFilter: payload }),
    [actions.updateShippingTo]: (state, payload) => ({...state, shippingTo: payload }),
    [actions.updateShopModal]: (state, payload) => ({...state, shopModal: payload }),

  },
  initialState
);

export default history =>
  combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer
  });
