import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const SEARCH_ALL = 'SEARCH_ALL';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

/* ------------       ACTION CREATOR     ------------------ */
const searchEverything = search => ({ type: SEARCH_ALL, search });
const clearAllSearch = search => ({ type: CLEAR_SEARCH, search });


/* ------------       THUNK CREATORS     ------------------ */

export const search = (criteria) => dispatch => {
    return axios.post('/api/search', criteria)
        .then(res => res.data)
        .then(foundCriteria => {
            dispatch(searchEverything(foundCriteria))
        })
        .catch(err => console.error(err));
}

export const clearSearch = () => dispatch => {
    dispatch(clearAllSearch())
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case SEARCH_ALL:
            return action.search;
        case CLEAR_SEARCH:
            return [];
        default:
            return state;
    }
}
