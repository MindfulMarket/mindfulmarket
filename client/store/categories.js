import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

/* ------------       ACTION CREATOR     ------------------ */
const getAllCategories = categories => ({ type: GET_ALL_CATEGORIES, categories });


/* ------------       THUNK CREATORS     ------------------ */

//NO Current backend route
export const fetchAllCategories = () => dispatch => {
    axios.get('/api/categories')
        .then(res => dispatch(getAllCategories(res.data)))
        .catch(err => console.error(err));
}

//data is currently hard-coded - pending back-end route
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}
