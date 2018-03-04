import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_BRANDS = 'GET_ALL_BRANDS';

/* ------------       ACTION CREATOR     ------------------ */
const getAllBrands = brands => ({ type: GET_ALL_BRANDS, brands });


/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllBrands = () => dispatch => {
    axios.get('/api/brands')
        .then(res => dispatch(getAllBrands(res.data)))
        .catch(err => console.error(err));
}

//
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return action.brands;
        default:
            return state;
    }
}
