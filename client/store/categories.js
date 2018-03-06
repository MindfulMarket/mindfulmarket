import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
const POST_NEW_CATEGORY = 'POST_NEW_CATEGORY';
const EDIT_CATEGORY = 'EDIT_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

/* ------------       ACTION CREATOR     ------------------ */
const getAllCategories = categories => ({
    type: GET_ALL_CATEGORIES, categories
});

const editCategory = category => ({
    type: EDIT_CATEGORY, category
});

const postNewCategory = category => ({
    type: POST_NEW_CATEGORY, category
})

const deleteCategory = id => ({
    type: DELETE_CATEGORY, id
})


/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllCategories = () => dispatch => {
    axios.get('/api/categories')
        .then(res => dispatch(getAllCategories(res.data)))
        .catch(err => console.error(err));
}

export const postCategory = newCategory => dispatch => {
    axios.post('/api/categories', newCategory)
        .then(res => {return res.data })
        .then(addedCategory => dispatch(postNewCategory(addedCategory)))
        .catch(err => console.error(err));
}

export const editCategoryThunk = (editedCategory, id) => dispatch => {
    axios.put(`/api/categories/${id}`, editedCategory)
        .then(res => {return res.data})
        .then(changedCategory => dispatch(editCategory(changedCategory)))
        .catch(err => console.error(err));
}

export const deleteCategoryThunk = (id) => dispatch => {
    axios.delete(`/api/categories/${id}`)
        .then(res => {return res.data})
        .then(deleted => dispatch(deleteCategory(id)))
        .catch(err => console.error(err));
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.categories;
        case POST_NEW_CATEGORY:
            return [...state, action.category]
        case EDIT_CATEGORY:
            return state.map(category => {
                if (category.id === action.category.id) {
                    return action.category
                } else {
                    return category
                }
            })
        case DELETE_CATEGORY:
            return state.filter(category => category.id !== action.id)
        default:
            return state;
    }
}
