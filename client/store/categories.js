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
export default function reducer(state = [{
        name: 'clothing',
        id: 2,
        imageUrl: 'https://jetimages.jetcdn.net/md5/540b1ee11353bf3a8d1676882528079e.500'
    },
    {
        name: 'beauty',
        id: 10,
        imageUrl: 'http://tattooremovalcreamsguide.com/wp-content/uploads/2017/10/Beauty-Pictures-3.jpg'
    }
], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.categories;
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