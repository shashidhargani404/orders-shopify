import React from 'react'
import './IEBLs.css'
import NavTab from '../NavTab/NavTab'
import Income from './Income'
import Expense from './Expense'
import Borrow from './Borrow'
import Lend from './Lend'

function IEBLs(props) {
    return (
        <div id="IEBLs">
            <Income />
            <Expense />
            <Borrow />
            <Lend />
        </div>
    )
}

export default IEBLs