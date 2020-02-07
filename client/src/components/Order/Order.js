import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import moment from 'moment'

class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newOrder: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.orders.length == 1 + this.props.orders.length) {
            this.setState({
                newOrder: true
            })
            setTimeout(() => {
                this.setState({
                    newOrder: false
                })
            }, 10000)
        }
    }
    render() {
        return (
            <div className="p-5" >
                <h4 className="pb-2" >Total Orders - { this.props.orders.length }</h4>
                {
                    this.state.newOrder ? (
                        <div class="alert alert-primary" role="alert">
                            A new product is ordered just now.
                        </div>
                    ) : ''
                }
                <table className="table">
                    <thead className="bg-white">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order</th>
                            <th scope="col">Date</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.orders.map((order, index) => {
                            return (
                                    <tr key={order._id}>
                                        <th scope="row">{ index + 1 }</th>
                                        <td>{ order.name }</td>
                                        <td> { new Date(Date.parse(order.created_at)).toLocaleString() } </td>
                                        <td>{ order.first_name + ' ' + order.last_name }
                                            <Link to={`/customers/${order._id}`}><FaEdit className="ml-2" /></Link>
                                        </td>
                                        <td>{ order.total_price.toFixed(2) }</td>
                                    </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(OrderList)