import React from 'react'
import { connect } from 'react-redux'
import { startEditOrder } from '../../actoins/ordersAction'

import CustomerEditForm from './CustomerEditForm'

function CustomerEdit(props) {
    const handleSubmit = formData => {
        props.dispatch(startEditOrder(formData, props))
    }
    return (
        props.order ? <CustomerEditForm {...props.order} handleSubmit={handleSubmit} /> : ''
    )
}

const mapStateToProps = (state, props) => {
    return {
        order: state.orders.find(order => order._id === props.match.params.id )
    }
}

export default connect(mapStateToProps)(CustomerEdit)