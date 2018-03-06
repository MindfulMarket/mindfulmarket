import axios from 'axios'
import history from '../history'
import { fetchAndSetCart, loadAndUpdateLocalStorage, addToCart } from './cart'


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_ADMIN = 'SET_ADMIN'
const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const defaultUser = { orders: [] }

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const setAdminMode = user => ({ type: SET_ADMIN, user })
const removeUser = () => ({ type: REMOVE_USER })
const setUserOrders = (orders) => ({ type: GET_ORDERS, orders })
/**
 * THUNK CREATORS
 */
export const getOrders = (userId) => dispatch => {
    axios.get(`/api/orders/${userId}`)
        .then((res) => {
            dispatch(setUserOrders(res.data))
        })
}

export const me = () => dispatch =>
    axios.get('/auth/me')
        .then(res => {
            let localCart = loadAndUpdateLocalStorage()
            dispatch(getUser(res.data || defaultUser))
            dispatch(fetchAndSetCart(res.data.shoppingCart || localCart))
            if (res.data.id !== undefined) {
                dispatch(getOrders(res.data.id))
                if (localCart.length) {
                    let result = window.confirm("There is already a cart! Click 'OK' to merge or 'cancel' to continue without merging.")
                    if (result) {
                        console.log('THE EXISTING CART = ', localCart)
                        localCart.forEach((productObj) => {
                            if (productObj.count > 1) {
                                for (let k = 0; k < productObj.count; k++) {
                                    dispatch(addToCart(productObj.product))
                                }
                            } else {
                                dispatch(addToCart(productObj.product))
                            }
                        })
                dispatch(loadAndUpdateLocalStorage([]))//cart on local state deleted when merge approved or denied

                    }
                }
                dispatch(loadAndUpdateLocalStorage([]))//cart on local state deleted when merge approved or denied
            }
        })
        .catch(err => console.error(err))


export const auth = (firstName, lastName, email, password, method) =>
    dispatch =>
        axios.post(`/auth/${method}`, { firstName, lastName, email, password })
            .then(res => {
                dispatch(getUser(res.data))
                dispatch(fetchAndSetCart(res.data.shoppingCart || []))
                if (res.data.id !== undefined) dispatch(getOrders(res.data.id))

                history.push('/')
            }, authError => { // rare example: a good use case for parallel (non-catch) error handler
                dispatch(getUser({ error: authError }))
            })


export const logout = () =>
    dispatch => {
        loadAndUpdateLocalStorage([])
        axios.post('/auth/logout')
            .then(_ => {
                dispatch(removeUser())
                dispatch(fetchAndSetCart([])) //clear the frontend cart on logout
                history.push('/login')
            })
            .catch(err => console.error(err))
    }


export const setAdmin = (user) => dispatch => {
    if (user.isAdmin) user.adminMode = true
    dispatch(setAdminMode(user))
}






/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
    switch (action.type) {
        case GET_USER:
            return action.user
        case REMOVE_USER:
            return defaultUser
        case SET_ADMIN:
            return action.user
        case GET_ORDERS:
            return { ...state, orders: action.orders }
        default:
            return state
    }
}
