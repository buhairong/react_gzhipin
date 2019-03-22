/*
* 登录路由组件
* */

import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    Radio,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Login extends Component {
    state = {
        username: '', // 用户名
        password: '' // 密码
    }

    Login = () => {
        console.log(this.state)
    }

    // 处理输入数据的改变： 更新对应的状态
    handleChange = (name, val) => {
        // 更新状态
        this.setState({
            [name]: val // 属性名不是name,而是name变量的值
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render () {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={val => {this.handleChange('username', val)}}>用户名：</InputItem>
                        <InputItem type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <Button type="primary" onClick={this.Login}>登&nbsp;&nbsp;&nbsp;录</Button>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
