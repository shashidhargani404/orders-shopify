import axios from "../config/axios"

const setOrders = (orders) => {
    return {
        type: 'SET_ORDERS',
        payload: orders
    }
}

export const startSetOrders = () => {
    return (dispatch) => {
        axios.get('/orders')
            .then((response) => {
                if(Array.isArray(response.data)) {
                    dispatch(setOrders(response.data))
                }
            })
            .catch((err) => {
                console.log(err)
            })     
    }
}

export const addOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}

const editOrder = (order) => {
    return {
        type: 'EDIT_ORDER',
        payload: order
    }
}

export const startEditOrder = (formData, props) => {
    return (dispatch) => {
        axios.put(`/orders/${props.match.params.id}`, formData)
            .then((response) => {
                if(response.data.hasOwnProperty('email')){
                    dispatch(editOrder(response.data))
                    props.history.push('/')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}