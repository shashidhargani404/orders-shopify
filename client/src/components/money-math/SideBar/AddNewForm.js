import React from 'react'
import { connect } from 'react-redux'
import { IoIosClose, IoMdAddCircle } from 'react-icons/io'
import { startAddIncome } from '../../../actions/incomeAction'
import { startAddExpense } from '../../../actions/expenseAction'
import { startAddBorrow } from '../../../actions/borrowAction'
import { startAddLend } from '../../../actions/lendAction'
import AddCategory from './AddCategory'

class AddNewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'income',
            category: '',
            categoryError: false,
            amount: '',
            amountError: false,
            description: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const { amount, category, description } = this.state
        const formData = { amount, category, description }
        if(!amount && !category) {
            this.setState({
                categoryError: true,
                amountError: true
            })
        } else if(!category) {
            this.setState({
                categoryError: true
            })
        } else if(!amount) {
            this.setState({
                amountError: true
            })
        } else {
            switch(this.state.type) {
                case 'income': {
                    this.props.dispatch(startAddIncome(formData))
                    break
                }
                case 'expense': {
                    this.props.dispatch(startAddExpense(formData))
                    break
                }
                case 'borrow': {
                    this.props.dispatch(startAddBorrow(formData))
                    break
                }
                case 'lend': {
                    this.props.dispatch(startAddLend(formData))
                    break
                }
            }
            this.props.handleAddForm('SB-add-new-form', 'none')
            this.setState({
                amount: '',
                category: '',
                description: ''
            })
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name + 'Error']: false
        })
    }
    handleClick = ( btn, color ) => {
        const buttons = ['income', 'expense', 'borrow', 'lend']

        for(const button of buttons) {
            document.getElementById(button).style.display = 'none'
            document.getElementById('NT-' + button).style.borderBottom = '4px solid rgba(255, 255, 255, 0)'
        }
        document.getElementById(btn).style.display = 'block'
        document.getElementById('NT-' + btn).style.borderBottom = '4px solid ' + color
    }
    render() {
        const { type, category, categoryError, amount, amountError, description } = this.state
        const styleCategory = categoryError ? { borderColor: 'red' } : {}
        const styleAmount = amountError ? { outline: '0.5px solid red' } : {}
        const styleAmountInput = amountError ? { border: 'none'} : {border: '1px solid rgb(165, 165, 165)'}
        return (
            <div id="SB-add-new-form">
                <button id="AN-close-btn" onClick={() => this.props.handleAddForm('SB-add-new-form', 'none')} ><IoIosClose id="AN-close-btn-icon" /></button>
                <form onSubmit={this.handleSubmit} >
                    <div className="AN-radios">
                        <input type="radio" name="type" value="income" checked={this.state.type === 'income'} onChange={this.handleChange} id="AN-income-radio" onClick={() => {
                            this.handleClick('income', 'green')
                        }} />
                        <label id="AN-income-label" htmlFor="AN-income-radio">Income</label>
                        <input type="radio" name="type" value="expense" checked={this.state.type === 'expense'} onChange={this.handleChange} id="AN-expense-radio" onClick={() => {
                            this.handleClick('expense', 'red')
                        }} />
                        <label htmlFor="AN-expense-radio">Expense</label>
                    </div>
                    <div className="AN-radios">
                        <input id="AN-borrow-radio" type="radio" name="type" value="borrow" checked={this.state.type === 'borrow'} onChange={this.handleChange} onClick={() => {
                            this.handleClick('borrow', 'black')
                        }} />
                        <label id="AN-borrow-label" htmlFor="AN-borrow-radio">Borrow</label>
                        <input id="AN-lend-radio" type="radio" name="type" value="lend" checked={this.state.type === 'lend'} onChange={this.handleChange} onClick={() => {
                            this.handleClick('lend', 'orange')
                        }} /> 
                        <label htmlFor="AN-lend-radio">Lend</label>
                    </div>
                    <div id="AN-category-div">
                        <label >Category</label>
                        <button type="button" onClick={ () => this.props.handleAddForm('AC-form', 'flex') }  ><IoMdAddCircle className="AN-category-add-icon" /></button>
                    </div>
                    <AddCategory handleAddForm={ this.props.handleAddForm } type={this.state.type} />
                    <select id="AN-category-select" onChange={this.handleChange} name="category" value={this.state.category} style={ styleCategory } >
                        <option value="">Select</option>
                        {
                            this.props.categories.filter(category => category.type === this.state.type).map(category => {
                                return <option className="AN-category-option" key={category._id} value={category._id}>{ category.name }</option>
                            })
                        }
                    </select>
                    <label>Amount</label>
                    <div style={ styleAmount } id="AN-amount-input"><span>$</span><input style={styleAmountInput} name="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount" /></div>
                    <label>Description</label>
                    <textarea id="AN-description-textarea" name="description" value={this.state.description} onChange={this.handleChange} ></textarea>
                    <input id="AN-add-btn" type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(AddNewForm)