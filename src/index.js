import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

let storeInstance = store()

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'))