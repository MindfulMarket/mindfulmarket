import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user';
import products from './products';
import cart from './cart';
import brands from './brands';
import causes from './causes';
import categories from './categories';
import review from './review';
import search from './search';

const reducer = combineReducers({ user, products, cart, brands, causes, categories, review, search })
const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';