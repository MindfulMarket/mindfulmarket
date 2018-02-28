import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
/* --------------- INIITIAL STATE --------------- */
const initialState = []

/* ------------       ACTION CREATOR     ------------------ */
const getProducts = products => ({ type: GET_ALL_PRODUCTS, products });
const getOneProduct = product => ({ type: GET_ONE_PRODUCT, product });
const removeProduct = id => ({ type: GET_ALL_PRODUCTS, id });
const updateProduct = product => ({ type: UPDATE_PRODUCT, product });
const addProduct = product => ({ type: ADD_PRODUCT, product })

/* ------------       THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
    axios.get('/api/products')
        .then(res => dispatch(getProducts(res.data)));
}

export function fetchOneProduct(product) {
    let id = product.id
    return function thunk(dispatch) {
        return axios.get(`/api/products/${id}`)
            .then(res => dispatch(getOneProduct(res.data)));
    }
}
//
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.products

        case GET_ONE_PRODUCT:
            return [...state, action.product]
                // return Object.assign({}, state, { product: action.product });
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                allProducts: state.products.filter(product => product.id !== action.product)
            });
        case UPDATE_PRODUCT:
            return Object.assign({}, state, {
                products: state.products.map(product => {
                    if (product.id === action.product.id) {
                        return action.product;
                    } else {
                        return product;
                    }
                })
            });
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            });
        default:
            return state;
    }
}
