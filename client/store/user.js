import axios from 'axios'
import history from '../history'
import { fetchAndSetCart } from './cart'


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_ORDERS = 'GET_ORDERS'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = [{ orders: [] }]

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const updateUser = (user) => ({ type: UPDATE_USER, user })
const setUserOrders = (orders) => ({ type: GET_ORDERS, orders })


/**
 * THUNK CREATORS
 */
export const getOrders = (userId) => dispatch => {
    return axios.get(`/api/orders/${userId}`)
        .then((res) => res.data)
        .then(user => dispatch(setUserOrders({ user })))
}

export const me = () => dispatch => {
    return axios.get('/auth/me')
        .then(res => {

            dispatch(getUser(res.data || defaultUser))
            dispatch(fetchAndSetCart(res.data.shoppingCart || []))
            dispatch(getOrders(res.data.id))
        })
        .catch(err => console.error(err))
}

export const updateMe = (user) => dispatch => {
    console.log(user)
    return axios.put(`api/users/${user.id}`, user)
        .then(user => {
            dispatch(updateUser(user.data))
            dispatch(fetchAndSetCart(user.data.shoppingCart || []))
            dispatch(getOrders(user.data.id))
        })
        .catch(err => console.error(err))
}

export const auth = (firstName, lastName, email, password, method) =>
    dispatch =>
    axios.post(`/auth/${method}`, { firstName, lastName, email, password })
    .then(res => {
        dispatch(getUser(res.data))
        dispatch(fetchAndSetCart(res.data.shoppingCart || []))
        dispatch(getOrders(res.data.id))

        history.push('/')
    }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
    })


export const logout = () =>
    dispatch =>
    axios.post('/auth/logout')
    .then(_ => {
        dispatch(removeUser())
        dispatch(fetchAndSetCart([])) //clear the frontend cart on logout
        history.push('/login')
    })
    .catch(err => console.error(err))

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
    switch (action.type) {
        case GET_USER:
            return action.user
        case UPDATE_USER:
            console.log(state, action)
            return {...state, user: action.orders };
        case REMOVE_USER:
            return defaultUser
        case GET_ORDERS:
            return {...state, orders: action.orders }
        default:
            return state
    }
}