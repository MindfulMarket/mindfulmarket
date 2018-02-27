import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */
const GET_PRODUCTS = 'GET_PRODUCTS'

/* ------------       ACTION CREATOR     ------------------ */
const getProducts = products => ({type: GET_PRODUCTS, products})

export default function reducer (products = [], action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return action.products;

    default:
      return products;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
  axios.get('/api/products')
       .then(res => dispatch(getProducts(res.data)));
};

