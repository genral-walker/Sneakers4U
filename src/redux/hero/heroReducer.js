
import heroActionTypes from './hero.types';
// import { addItemToCart, removeItemFromCart } from './hero.utils';

const INITIAL_STATE = {
  shown: true,
};

const heroReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case heroActionTypes.SHOW_HERO:
      return {
        ...state,
        shown: true
      };
    case heroActionTypes.HIDE_HERO:
      return {
        ...state,
        shown: false
      };
    default:
      return state;

    /*
case CartActionTypes.ADD_ITEM:
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload)
    };
  case CartActionTypes.REMOVE_ITEM:
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload)
    };
  case CartActionTypes.CLEAR_ITEM_FROM_CART:
    return {
      ...state,
      cartItems: state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )
    };
  case CartActionTypes.CLEAR_CART:
    return {
      ...state,
      cartItems: []
    };
    */
  }
};

export default heroReducer;
