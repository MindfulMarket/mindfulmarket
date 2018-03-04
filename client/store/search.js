import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const SEARCH_ALL = 'SEARCH_ALL';
// const SEARCH_ALL = 'SEARCH_ALL';

/* ------------       ACTION CREATOR     ------------------ */
const searchEverything = search => ({ type: SEARCH_ALL, search });


/* ------------       THUNK CREATORS     ------------------ */

export const search = (criteria) => dispatch => {
    console.log(criteria)
    axios.post('/api/search', criteria)
        .then(res => dispatch(searchEverything(res.data)))
        .then(foundCriteria => {
            console.log(foundCriteria)

        })
        .catch(err => console.error(err));
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case SEARCH_ALL:
            return action.search;
        default:
            return state;
    }
}