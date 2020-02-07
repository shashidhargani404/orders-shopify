const ordersInitialState = []

const orderReducer = (state = ordersInitialState, action) => {
    switch(action.type) {
        case 'SET_ORDERS': {
            return action.payload.reverse()
        }
        case 'ADD_ORDER': {
            return [action.payload, ...state]
        }
        case 'EDIT_ORDER': {
            return state.map(order => {
                return order._id === action.payload._id ? action.payload : order
            })
        }
        default: {
            return [...state]
        }
    }
}

export default orderReducer