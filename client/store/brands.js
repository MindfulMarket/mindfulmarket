import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_BRANDS = 'GET_ALL_BRANDS';
const POST_NEW_BRAND = 'POST_NEW_BRAND';
const EDIT_BRAND = 'EDIT_BRAND';
const DELETE_BRAND = 'DELETE_BRAND';

/* ------------       ACTION CREATOR     ------------------ */
const getAllBrands = brands => ({
    type: GET_ALL_BRANDS, brands
});

const editBrand = brand => ({
    type: EDIT_BRAND, brand
});

const postNewBrand = brand => ({
    type: POST_NEW_BRAND, brand
})

const deleteBrand = id => ({
    type: DELETE_BRAND, id
})

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllBrands = () => dispatch => {
    axios.get('/api/brands')
        .then(res => dispatch(getAllBrands(res.data)))
        .catch(err => console.error(err));
}

export const postBrand = newBrand => dispatch => {
    axios.post('/api/brands', newBrand)
        .then(res => {return res.data })
        .then(addedBrand => dispatch(postNewBrand(addedBrand)))
        .catch(err => console.error(err));
}

export const editBrandThunk = (editedBrand, id) => dispatch => {
    axios.put(`/api/brands/${id}`, editedBrand)
        .then(res => {return res.data})
        .then(changedBrand => dispatch(editBrand(changedBrand)))
        .catch(err => console.error(err));
}

export const deleteBrandThunk = (id) => dispatch => {
    axios.delete(`/api/brands/${id}`)
        .then(res => res.data)
        .then(deleted => dispatch(deleteBrand(id)))
        .catch(err => console.error(err));
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return action.brands;
        case POST_NEW_BRAND:
            return [...state, action.brand]
        case EDIT_BRAND:
            return state.map(brand => {
                if (brand.id === action.brand.id) {
                    return action.brand
                } else {
                    return brand
                }
            })
        case DELETE_BRAND:
            return state.filter(brand => brand.id !== action.id)
        default:
            return state;
    }
}
