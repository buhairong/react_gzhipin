/*
* redux模块：对象
* 1.createStore(reducer)：接收一个reducer函数，返回一个store对象
*   使用：createStore(reducre)
* 2.combineReducers(reducers)：接收一个包含多个reducer函数的对象，返回一个新的reducer函数
*   使用：export default combineReducers({count, msgs})
* 3.store对象
* getState():得到内部管理state对象
* dispatch(action):分发action，会触发reducer调用，返回一个新的state，调用所有绑定的listener
* subscribe(listener)：订阅一个state的监听器
* */

export function createStore (reducer) {

    // 内部state
    let state
    // 内部保存n个listener的数组
    const listeners = []
    // 第一次调用reducer得到初始状态并保存
    state = reducer(state, {type: '@mini-redux'})

    function getState () {
        return state
    }

    function dispatch (action) {
        // 调用reducer，得到一个新的state，保存上
        state = reducer(state, action)
        // 调用listeners中所有的监视回调函数
        listeners.forEach(listener => listener())
    }

    // 订阅一个state的监听器
    function subscribe (listener) {
        listeners.push(listener)
    }
    
    return {getState, dispatch, subscribe}
}

// 接收一个包含多个reducer函数的对象，返回一个新的reducer函数
export function combineReducers (reducers) {

    return function (state = {}, action) { // 这个函数会传给createStore()
        // 依次调用所有reducer函数，得到n个新的子状态，封装成对象并返回
        // 准备一个用来保存所有新状态的容器对象
        const newState = {}
        // 包含所有reducer函数名的数组：['count', 'msgs']
        const keys = Object.keys(reducers)
        // 遍历
        keys.forEach(key => {
            // 得到对应的reducer函数
            const childReducer = reducers[key]
            // 得到对应的state
            const childState = state[key]
            // 执行子reducer
            const newChildState = childReducer(childState, action)
            // 保存到新的总state中
            newState[key] = newChildState
        })
        // 返回总的新state
        return newState
    }
}

export function combineReducers2 (reducers) {

    return function (state = {}, action) { // 这个函数会传给createStore()
        // 依次调用所有reducer函数，得到n个新的子状态，封装成对象并返回

        return Object.keys(reducers).reduce((newState, reducerName) => {
            newState[reducerName] = reducers[reducerName](state[reducerName], action)
            return newState
        }, {})

    }
}