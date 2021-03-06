import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const POST_NEW_PRODUCT = 'POST_NEW_PRODUCT';

const SORT_PRODUCTS_LOW_HIGH = 'SORT_PRODUCTS_LOW_HIGH' //by price
const SORT_PRODUCTS_HIGH_LOW = 'SORT_PRODUCTS_HIGH_LOW' //by price

const SORT_PRODUCTS_BY_RATING_LOW_HIGH = 'SORT_PRODUCTS_BY_RATING_LOW_HIGH'
const SORT_PRODUCTS_BY_RATING_HIGH_LOW = 'SORT_PRODUCTS_BY_RATING_HIGH_LOW'

const SORT_PRODUCTS_BY_NUM_REVIEWS_LOW_HIGH = 'SORT_PRODUCTS_BY_NUM_REVIEWS_LOW_HIGH'
const SORT_PRODUCTS_BY_NUM_REVIEWS_HIGH_LOW = 'SORT_PRODUCTS_BY_NUM_REVIEWS_HIGH_LOW'

const FILTER_UNDER_TEN = 'FILTER_UNDER_TEN'
const FILTER_UNDER_TWENTYFIVE = 'FILTER_UNDER_TWENTYFIVE'
const FILTER_UNDER_FIFTY = 'FILTER_UNDER_FIFTY'
const FILTER_FIFTY_TO_ONEHUNDRED = 'FILTER_FIFTY_TO_ONEHUNDRED'
const FILTER_ONE_TO_TWOHUNDRED = 'FILTER_ONE_TO_TWOHUNDRED'
const FILTER_TWO_TO_THREEHUNDRED = 'FILTER_TWO_TO_THREEHUNDRED'
const FILTER_THREEHUNDRED_PLUS = 'FILTER_THREEHUNDRED_PLUS'

const STARS_FILTER_1 = 'STARS_FILTER_1'
const STARS_FILTER_2 = 'STARS_FILTER_2'
const STARS_FILTER_3 = 'STARS_FILTER_3'
const STARS_FILTER_4 = 'STARS_FILTER_4'
const STARS_FILTER_5 = 'STARS_FILTER_5'

const REVIEWS_FILTER_10 = 'REVIEWS_FILTER_10'
const REVIEWS_FILTER_100 = 'REVIEWS_FILTER_100'
const REVIEWS_FILTER_500 = 'REVIEWS_FILTER_500'
const REVIEWS_FILTER_1000 = 'REVIEWS_FILTER_1000'


const CLEAR_FILTERS = 'CLEAR_FILTERS'

/* ------------       ACTION CREATOR     ------------------ */


export const clearFilters = () => ({ type: CLEAR_FILTERS })
/* ------------       ACTION CREATOR     ------------------ */

const getProducts = products => ({
    type: GET_ALL_PRODUCTS, products
});

const removeProduct = id => ({
    type: REMOVE_PRODUCT, id
});

const updateProduct = product => ({
    type: UPDATE_PRODUCT, product
});

const postNewProduct = product => ({
    type: POST_NEW_PRODUCT, product
})

export const sortProducts = (how) => {
    switch (how) {
        case 'lowHigh':
            return { type: SORT_PRODUCTS_LOW_HIGH }
        case 'highLow':
            return { type: SORT_PRODUCTS_HIGH_LOW }
        case 'ratingLowHigh':
            return { type: SORT_PRODUCTS_BY_RATING_LOW_HIGH }
        case 'ratingHighLow':
            return { type: SORT_PRODUCTS_BY_RATING_HIGH_LOW }
        case 'reviewsLowHigh':
            return { type: SORT_PRODUCTS_BY_NUM_REVIEWS_LOW_HIGH }
        case 'reviewsHighLow':
            return { type: SORT_PRODUCTS_BY_NUM_REVIEWS_HIGH_LOW }
        default:

    }
};

export const filterProducts = (range) => {
    switch (range) {
        case 'underTen':
            return { type: FILTER_UNDER_TEN }
        case 'underTwentyFive':
            return { type: FILTER_UNDER_TWENTYFIVE }
        case 'underFifty':
            return { type: FILTER_UNDER_FIFTY }
        case 'fiftyToOneHundred':
            return { type: FILTER_FIFTY_TO_ONEHUNDRED }
        case 'oneToTwoHundred':
            return { type: FILTER_ONE_TO_TWOHUNDRED }
        case 'twoToThreeHundred':
            return { type: FILTER_TWO_TO_THREEHUNDRED }
        case 'overThreeHundred':
            return { type: FILTER_THREEHUNDRED_PLUS }
        case 'one':
            return { type: STARS_FILTER_1 }
        case 'two':
            return { type: STARS_FILTER_2 }
        case 'three':
            return { type: STARS_FILTER_3 }
        case 'four':
            return { type: STARS_FILTER_4 }
        case 'fourPlus':
            return { type: STARS_FILTER_5 }
        case 'tenPlus':
            return { type: REVIEWS_FILTER_10 }
        case 'hundredPlus':
            return { type: REVIEWS_FILTER_100 }
        case 'fiveHundredPlus':
            return { type: REVIEWS_FILTER_500 }
        case 'thousandPlus':
            return { type: REVIEWS_FILTER_1000 }
        default:

    }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
    axios.get('/api/products')
        .then(res => {
            let products = res.data
            let mod = products.map((product) => {
                let ratingSum = 0
                if (product.Reviews.length > 0) {
                    product.Reviews.forEach((review) => ratingSum += review.rating)
                    product.avgRating = ratingSum / product.Reviews.length
                    return product
                }
                product.avgRating = 'no reviews'
                return product
            })
            dispatch(getProducts(mod))
        })
        .catch(err => console.error(err));
}
export const postProduct = newProduct => dispatch => {
    axios.post('/api/products', newProduct)
        .then(res => { return res.data })
        .then(addedProduct => dispatch(postNewProduct(addedProduct)))
        .catch(err => console.error(err));
}

export const editProductThunk = (editedProduct, id) => dispatch => {
    axios.put(`/api/products/${id}`, editedProduct)
        .then(res => { return res.data })
        .then(changedProduct => dispatch(updateProduct(changedProduct)))
        .catch(err => console.error(err));
}

export const deleteProductThunk = (id) => dispatch => {
    axios.delete(`/api/Products/${id}`)
        .then(res => { return res.data })
        .then(deleted => dispatch(removeProduct(id)))
        .catch(err => console.error(err));
}

export default function reducer(state = { all: [], filteredOrSorted: [] }, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return { all: action.products, filteredOrSorted: action.products }
        case REMOVE_PRODUCT:
            let mod = state.all.filter(product => product.id !== action.id)
            return { ...state, all: mod }
        case POST_NEW_PRODUCT:
            return { all: [...state.all, action.product], filteredOrSorted: [...state.all, action.product] }
        case UPDATE_PRODUCT:
            return {
                ...state,
                all: state.all.map(product => {
                    if (product.id === action.product.id) {
                        return action.product;
                    } else {
                        return product;
                    }
                })
            }
        case CLEAR_FILTERS:
            return { ...state, filteredOrSorted: state.all.slice(0) }
        case SORT_PRODUCTS_LOW_HIGH:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product1.price - product2.price) }
        case SORT_PRODUCTS_HIGH_LOW:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product2.price - product1.price) }
        case SORT_PRODUCTS_BY_RATING_LOW_HIGH:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product1.avgRating - product2.avgRating) }
        case SORT_PRODUCTS_BY_RATING_HIGH_LOW:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product2.avgRating - product1.avgRating) }
        case SORT_PRODUCTS_BY_NUM_REVIEWS_LOW_HIGH:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product1.Reviews.length - product2.Reviews.length) }
        case SORT_PRODUCTS_BY_NUM_REVIEWS_HIGH_LOW:
            return { ...state, filteredOrSorted: state.filteredOrSorted.slice(0).sort((product1, product2) => product2.Reviews.length - product1.Reviews.length) }
        case FILTER_UNDER_TEN:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price < 10) }
        case FILTER_UNDER_TWENTYFIVE:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price < 25) }
        case FILTER_UNDER_FIFTY:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price < 50) }
        case FILTER_FIFTY_TO_ONEHUNDRED:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price <= 100 && product.price >= 50) }
        case FILTER_ONE_TO_TWOHUNDRED:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price <= 200 && product.price >= 100) }
        case FILTER_TWO_TO_THREEHUNDRED:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price <= 300 && product.price >= 200) }
        case FILTER_THREEHUNDRED_PLUS:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.price > 300) }
        case STARS_FILTER_1:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.avgRating <= 1) }
        case STARS_FILTER_2:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.avgRating <= 2 && product.avgRating >= 1) }
        case STARS_FILTER_3:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.avgRating <= 2.9 && product.avgRating >= 2) }
        case STARS_FILTER_4:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.avgRating < 4 && product.avgRating >= 3) }
        case STARS_FILTER_5:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.avgRating >= 4) }
        case REVIEWS_FILTER_10:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.reviews.length > 10) }
        case REVIEWS_FILTER_100:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.reviews.length >= 100) }
        case REVIEWS_FILTER_500:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.reviews.length >= 500) }
        case REVIEWS_FILTER_1000:
            return { ...state, filteredOrSorted: state.all.slice(0).filter((product) => product.reviews.length >= 1000) }
        default:
            return state;
    }
}
