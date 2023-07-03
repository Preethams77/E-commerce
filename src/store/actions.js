export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_DECREASE_ITEM = "INCREASE_DECREASE_ITEM";

export const addToCartAction = (payload) => { //diff type of actions we want user to perform on this app .this will accept a payload
  // const action = {
  //   type: ADD_TO_CART,
  //   payload: {
  //     id: 1,
  //   },
  // };

  return { //this is there to structure the action object that will be passed in dispatch for different types of action
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeFromCartAction = (payload) => {
  // const action = {
  //   type: ADD_TO_CART,
  //   payload: {
  //     id: 1,
  //   },
  // };

  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
};
export const increaseDecreaseItem = (payload) => {
  // const action = {
  //   type: ADD_TO_CART,
  //   payload: {
  //     id: 1,
  //     newQuantity: 2,
  //   },
  // };
  return {
    type: INCREASE_DECREASE_ITEM,
    payload: payload,
  };
};