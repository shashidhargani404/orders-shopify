import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import socketIOClient from 'socket.io-client'

import configureStore from './store/configureStore'
import { startSetOrders, addOrder } from './actoins/ordersAction'

const store = configureStore()
store.dispatch(startSetOrders())

const socket = socketIOClient('/')
socket.on('new order', (order) => {
store.dispatch(addOrder(order))
})

const element = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister()