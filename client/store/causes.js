import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_CAUSES = 'GET_ALL_CAUSES';

/* ------------       ACTION CREATOR     ------------------ */
const getAllCauses = causes => ({ type: GET_ALL_CAUSES, causes });


/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllCauses = () => dispatch => {
    axios.get('/api/causes')
        .then(res => dispatch(getAllCauses(res.data)))
        .catch(err => console.error(err));
}

//
export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CAUSES:
            return action.causes;
        // case REMOVE_PRODUCT:
        //     return Object.assign({}, state, {
        //         allProducts: state.products.filter(product => product.id !== action.product)
        //     });
        // case UPDATE_PRODUCT:
        //     return Object.assign({}, state, {
        //         products: state.products.map(product => {
        //             if (product.id === action.product.id) {
        //                 return action.product;
        //             } else {
        //                 return product;
        //             }
        //         })
        //     });
        default:
            return state;
    }
}
