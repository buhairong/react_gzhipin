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

export function combineReducers (reducers) {
    
}