import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */
const GET_PRODUCTS = 'GET_PRODUCTS'

/* ------------       ACTION CREATOR     ------------------ */
const getProducts = products => ({type: GET_PRODUCTS, products})

export default function reducer (products = [], action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return action.products;

    default:
      return products;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
       .then(res => dispatch(init(res.data)));
};

export const removeUser = id => dispatch => {
  axios.delete(`/api/users/${id}`)
       .then(() => dispatch(remove(id)))
       .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
};

export const addUser = user => dispatch => {
  axios.post('/api/users', user)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

export const updateUser = (id, user) => dispatch => {
  axios.put(`/api/users/${id}`, user)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating user: ${user} unsuccesful`, err));
};
