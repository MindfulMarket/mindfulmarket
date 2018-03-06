import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_CAUSES = 'GET_ALL_CAUSES';
const POST_NEW_CAUSE = 'POST_NEW_CAUSE';
const EDIT_CAUSE = 'EDIT_CAUSE';
const DELETE_CAUSE = 'DELETE_CAUSE';

/* ------------       ACTION CREATOR     ------------------ */
const getAllCauses = causes => ({
    type: GET_ALL_CAUSES, causes
});

const editCause = cause => ({
    type: EDIT_CAUSE, cause
});

const postNewCause = cause => ({
    type: POST_NEW_CAUSE, cause
})

const deleteCause = id => ({
    type: DELETE_CAUSE, id
})


/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllCauses = () => dispatch => {
    axios.get('/api/causes')
        .then(res => dispatch(getAllCauses(res.data)))
        .catch(err => console.error(err));
}

export const postCauseThunk = newCause => dispatch => {
    axios.post('/api/causes', newCause)
    .then(res => {return res.data })
    .then(addedCause => dispatch(postNewCause(addedCause)))
    .catch(err => console.error(err));
}

export const editCauseThunk = (editedCause, id) => dispatch => {
    axios.put(`/api/causes/${id}`, editedCause)
    .then(res => {return res.data})
    .then(changedCause => dispatch(editCause(changedCause)))
    .catch(err => console.error(err));
}

export const deleteCauseThunk = (id) => dispatch => {
    axios.delete(`/api/causes/${id}`)
    .then(res => {return res.data})
    .then(deleted => dispatch(deleteCause(id)))
    .catch(err => console.error(err));

}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_CAUSES:
            return action.causes;
        case POST_NEW_CAUSE:
            return [...state, action.cause]
        case EDIT_CAUSE:
            return state.map(cause => {
                if (cause.id === action.cause.id) {
                    return action.cause
                } else {
                    return cause
                }
            })
        case DELETE_CAUSE:
            return state.filter(cause => cause.id !== action.id)
        default:
            return state;
    }
}
