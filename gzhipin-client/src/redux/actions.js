/*
* 包含n个action creator
* 异步action
* 同步action
* */
import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types'
import {
    reqRegister,
    reqLogin
} from '../api'

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, user})

// 错误提示信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, msg})

// 注册异步action
export const register = (user) => {
    return async dispatch => {
        //发送注册的异步ajax请求
        const response = await reqRegister(user)
        const result = response.data
        if (result.code === 0) { // 成功
            // 授权成功的同步action
            dispatch(authSuccess(result.data))
        } else { // 失败
            // 分发错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
}

// 登录异步action
export const login = (user) => {
    return async dispatch => {
        //发送注册的异步ajax请求
        const response = await reqRegister(user)
        const result = response.data
        if (result.code === 0) { // 成功

        } else { // 失败

        }
    }
}