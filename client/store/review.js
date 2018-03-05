import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const ADD_REVIEW = 'ADD_REVIEW';
const GET_REVIEWS = 'GET_REVIEWS';
const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS'


/* ------------       ACTION CREATOR     ------------------ */

const addReview = review => ({
  type: ADD_REVIEW, review
})

const getReviews = reviews => ({
  type: GET_REVIEWS, reviews
})

const getProductReviews = reviews => ({
  type: GET_PRODUCT_REVIEWS, reviews
})

/* ------------       THUNK CREATORS     ------------------ */

export const fetchProductReviews = (id) => dispatch => {
  return axios.get(`/api/reviews/${id}`)
    .then(res => dispatch(getProductReviews(res.data)))
    .catch(err => console.error(err))
}

export const fetchReview = () => dispatch => {
  return axios.get('/api/reviews')
    .then(res => dispatch(getReviews(res.data)))
    .catch(err => console.error(err))
}

export const postReview = (review) => dispatch => {
  return axios.post('/api/reviews', review)
    .then(res => dispatch(addReview(res.data)))
}

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    case ADD_REVIEW:
      return [...state, action.review];
    default:
      return state;
  }
}
