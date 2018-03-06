import axios from 'axios';

const GET_CART = 'GET_CART'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_QUANT = 'UPDATE_QUANT'
const CHECKOUT = 'CHECKOUT'

//editing will update the db and retreve the campuses again (no new action needed)
const cartReducer = function (state = [], action) {
    switch (action.type) {
        case GET_CART:
            return action.cart
        case ADD_PRODUCT_TO_CART:

            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === action.product.id) {
                    return state.map((prod) => {
                        if (prod.product.id === action.product.id) {
                            prod.count++
                            return prod
                        }
                        return prod
                    })
                }
            }

            return [...state, { product: action.product, count: 1 }]


        case DELETE_PRODUCT:
            return state.filter((prod) => {
                console.log('ON STATE', prod.product.id, 'INCOMING ', action.product.product.id)
                return prod.product.id !== action.product.product.id})
        case UPDATE_QUANT:
            return state.map((prod) => {
                if (prod.product.id === action.product.id) {
                    console.log('MATCH FOUND')
                    prod.count = action.newQuant;
                    return prod
                }
                return prod
            })
        /* will be used to complete cartReducer*/
        // case UPDATE_QUANT:
        //   return { ...state, allCampuses: [...state.allCampuses, action.campus] }
        default:
            return state
    }
};
export const loadAndUpdateLocalStorage = (incomingCart) => {
    console.log('HIIIT',incomingCart)
    let cart = JSON.parse(window.localStorage.getItem('mindfulCart'))
    if (incomingCart) window.localStorage.setItem('mindfulCart', JSON.stringify(incomingCart))
    return JSON.parse(window.localStorage.getItem('mindfulCart')) //synchronicity ftw
}

//ACTION CREATORS
export const updateBackendCart = (cart, userId) => {
    axios.put(`/api/users/${userId}`, { shoppingCart: cart })
}

export const updateQuant = (product,newQuant) => ({type: UPDATE_QUANT, product, newQuant})

export const fetchAndSetCart = (cart) => {
    return { type: GET_CART, cart }
}

export const addToCart = product => ({ type: ADD_PRODUCT_TO_CART, product })

export const deleteProduct = product => ({ type: DELETE_PRODUCT, product })

export default cartReducer
