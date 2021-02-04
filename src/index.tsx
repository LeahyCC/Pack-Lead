import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/master.scss'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
