import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

/* ------------       ACTION CREATOR     ------------------ */
const getProducts = products => ({ type: GET_ALL_PRODUCTS, products });
const removeProduct = id => ({ type: GET_ALL_PRODUCTS, id });
const updateProduct = product => ({ type: UPDATE_PRODUCT, product });


/* ------------       THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
return     axios.get('/api/products')
        .then(res => dispatch(getProducts(res.data)))
        .catch(err => console.error(err));
}

//
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.products
        case REMOVE_PRODUCT:
            return  state.filter(product => product.id !== action.product)
        case UPDATE_PRODUCT:
              return state.map(product => {
                    if (product.id === action.product.id) {
                        return action.product;
                    } else {
                        return product;
                    }
                })
        default:
            return state;
    }
}
