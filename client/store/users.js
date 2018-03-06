import axios from 'axios'
import history from '../history'
import { fetchAndSetCart } from './cart'


/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const GET_USERS = 'GET_USERS'
const REMOVE_USER = 'REMOVE_USER'
const ADD_NEW_USER = 'ADD_NEW_USER';


/**
 * INITIAL STATE
 */
const defaultUser = []

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const getUsers = users => ({ type: GET_USERS, users })
    // const setAdminMode = user => ({ type: SET_ADMIN, user })
const removeUser = () => ({ type: REMOVE_USER })
const addUser = product => ({
        type: ADD_NEW_USER,
        product
    })
    /**
     * THUNK CREATORS
     */


// export const setAdmin = (user) => dispatch => {
//     if (user.isAdmin) user.adminMode = true
//     dispatch(setAdminMode(user))
// }

export const getAllUsers = (users) => dispatch => {
    console.log('getting users')
    return axios.get(`/api/users`, users)
        .then(allUsers => {
            dispatch(getUsers(allUsers.data))
                // dispatch(fetchAndSetCart(users.data.shoppingCart || []))
                // dispatch(getOrders(users.data.id))
        })
        .catch(err => console.error(err))
}

export const addNewUser = user => dispatch => {
    axios.post('/api/users', user)
        .then(res => res.data)
        .then(addedUser => {
            console.log(addedUser)
            dispatch(addUser(addedUser))
        })
        .then(() => dispatch(getUsers))
        .catch(err => console.error(err));
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
    switch (action.type) {
        case GET_USER:
            return action.user
        case GET_USERS:
            return action.users
        case ADD_NEW_USER:
            console.log(state, action)
            return [...state, action.product]
        case REMOVE_USER:
            return defaultUser
        default:
            return state
    }
}