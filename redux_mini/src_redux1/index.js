import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import store from './redux/store'

ReactDOM.render(<App store={store}/>, document.getElementById('root'))

// 监视store中的state的变化，一旦变化会自动调用回调函数重新渲染
store.subscribe(function () {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})