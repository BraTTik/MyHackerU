import { createReducer } from "redux-act";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import * as actions from "./actions";
import Image from "../assets/images/item-01.jpg";

const dataStub = {
  totalItems: 2,
  items: [
    {
      id: 103,
      name: "Men Tshirt",
      price: 36.95,
      img: Image,
      cnt: 1
    },
    {
      id: 100,
      name: "Mug Adventure",
      price: 16.95,
      img: Image,
      cnt: 1
    }
  ]
};

const initialState = {
  cart: dataStub,
  isMobile: false,
  favorite: []
};


const rootReducer = createReducer(
  {
    [actions.updateCart]: (state, payload) => ({...state, cart: payload }),

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
      console.log('total-items: ',total)
      return{...state, cart:{...state.cart, totalItems: total }}
    }
  },
  initialState
);

export default history =>
  combineReducers({
    router: connectRouter(history),
    app: rootReducer,
    toastr: toastrReducer
  });
