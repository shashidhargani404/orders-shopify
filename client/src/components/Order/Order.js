import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import moment from 'moment'

import generatePDF from './PDF'

class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newOrder: 0,
            searchData: [],
            searchItems: [],
            search: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            searchData: nextProps.orders.map(order => {
                return { _id: order._id, data: order.name + ' ' + moment(order.created_at).format('MMM Do YY, h:mm a') + ' ' + order.first_name + ' ' + order.last_name + ' ' + order.total_price.toFixed(2)}
            })
        })
        if(nextProps.orders.length == 1 + this.props.orders.length) {
            this.setState((prevState) => ({
                newOrder: prevState.newOrder + 1
            }))
        }
    }
    handleNewOrders = () => {
            this.setState(() => ({
                newOrder: 0
            }))
    }
    handleSearch = (e) => {
        const str = e.target.value
        this.setState((prevState) => ({
            search: str,
            searchItems: prevState.searchData.filter( singleData => singleData.data.includes(str) && str )
        }))
    }
    render() {
        const orders = this.state.search.length ? this.props.orders.filter(order => this.state.searchItems.map(item => item._id).includes(order._id)) : this.props.orders
        return (
            <div className="content-fluid p-5 pt-0" >
                <form className="d-flex flex-column align-items-start form-inline my-2 my-lg-0" onSubmit={ (e) => e.preventDefault() } >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange={ this.handleSearch } />
                    <span className="text-secondary mt-1" style={{fontSize: '14px'}} >* Search by Order, Date, Customer or Total</span>
                </form>
                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                    <h6 className="m-0" >Total Orders - { this.props.orders.length }</h6>
                    <button type="button" className="btn btn-info btn-sm" onClick={generatePDF} >Generate PDF</button>
                </div>
                {
                    this.state.newOrder ? (
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Hey congrats,</strong> You got { this.state.newOrder } new order(s).
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleNewOrders} >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ) : ''
                }
                <table id="pdfdiv" className="table table-hover" style={{backgroundColor: 'rgb(240,240,240)'}}>
                    <thead className="bg-secondary text-light">
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
                        orders.length ? (
                            orders.map((order, index) => {
                                return (
                                    <tr key={order._id}>
                                        <th scope="row">{ index + 1 }</th>
                                        <td>{ order.name }</td>
                                        <td> { moment(order.created_at).format('MMM Do YY, h:mm a') } </td>
                                        <td>{ order.first_name + ' ' + order.last_name }
                                            <Link to={`/customers/${order._id}`}><FaEdit className="ml-2" /></Link>
                                        </td>
                                        <td>{ order.total_price.toFixed(2) }</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center" >No orders found</td>
                            </tr>
                        )
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