import axios from 'axios';
/* -----------------    ACTION TYPES    ------------------ */
const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
const EDIT_ORDER = 'EDIT_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';

/* ------------       ACTION CREATOR     ------------------ */
const getAllOrders = orders => ({
    type: GET_ALL_ORDERS, orders
});

const editOrder = order => ({
    type: EDIT_ORDER, order
});

const deleteOrder = id => ({
    type: DELETE_ORDER, id
})

/* ------------       THUNK CREATORS     ------------------ */

export const fetchAllOrders = () => dispatch => {
    axios.get('/api/orders')
        .then(res => dispatch(getAllOrders(res.data)))
        .catch(err => console.error(err));
}

export const editOrderThunk = (editedOrder, id) => dispatch => {
    axios.put(`/api/orders/${id}`, editedOrder)
        .then(res => {return res.data})
        .then(changedOrder => dispatch(editOrder(changedOrder)))
        .catch(err => console.error(err));
}

export const deleteOrderThunk = (id) => dispatch => {
    axios.delete(`/api/orders/${id}`)
        .then(res => res.data)
        .then(deleted => dispatch(deleteOrder(id)))
        .catch(err => console.error(err));
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_ALL_ORDERS:
            return action.orders;
        case EDIT_ORDER:
            return state.map(order => {
                if (order.id === action.order.id) {
                    return action.order
                } else {
                    return order
                }
            })
        case DELETE_ORDER:
            return state.filter(order => order.id !== action.id)
        default:
            return state;
    }
}
