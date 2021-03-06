import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user';
import allUsers from './users';
import products from './products';
import cart from './cart';
import brands from './brands';
import causes from './causes';
import categories from './categories';
import review from './review';
import search from './search';
import orders from './orders'

const reducer = combineReducers({ user, products, cart, brands, causes, categories, review, search, orders, allUsers })
const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './products';
export * from './brands';
export * from './causes';
export * from './categories';
export * from './orders';
export * from './users';
