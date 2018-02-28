import axios from 'axios';

const GET_CART = 'GET_CART'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_QUANT = 'UPDATE_QUANT'
const CHECKOUT = 'CHECKOUT'

//editing will update the db and retreve the campuses again (no new action needed)
const cartReducer = function (state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
    // console.log("in the reducer" ,action.product)
      return  [...state, action.product]
    case DELETE_PRODUCT:
      return state.filter((prod) => prod.id !== action.product.id)
    // case UPDATE_QUANT:
    //   return { ...state, allCampuses: [...state.allCampuses, action.campus] }
    default:
      return state
  }
};

//ACTION CREATORS
export const addToCart = product => {
  console.log('PRODUCT IN ACTION CRETOR = ', product)
  return { type: ADD_PRODUCT_TO_CART, product}};
export const deleteProduct = product => ({ type: DELETE_PRODUCT, product })

export default cartReducer


