import React from 'react'
import { connect } from 'react-redux'
import axios from '../../../config/axios'
import { setUser } from '../../../actions/userAction'
import { setIncomes } from '../../../actions/incomeAction'
import { setExpenses } from '../../../actions/expenseAction'
import { setBorrows } from '../../../actions/borrowAction'
import { setLends } from '../../../actions/lendAction'
import { setCategories } from '../../../actions/categoryAction'

function UserProfile(props) {
    const handleLogout = () => {
        axios.delete('/logout')
            .then((response) => {
                if(response.data === 'logged_out') {
                    localStorage.removeItem('x-auth-moneymath')
                    props.dispatch(setUser({}))
                    props.dispatch(setIncomes([]))
                    props.dispatch(setExpenses([]))
                    props.dispatch(setBorrows([]))
                    props.dispatch(setLends([]))
                    props.dispatch(setCategories([]))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div id="NB-user-profile">
            <span>{ props.user ? ( props.user.username ? props.user.username[0].toUpperCase() : '' ) : '' }</span>
            <div id="NB-logout" >
                <button onClick={handleLogout} >Log out</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserProfile)