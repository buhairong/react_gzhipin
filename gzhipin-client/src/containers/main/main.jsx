/*
* 主界面路由组件
* */

import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'

class Main extends Component {
    render () {

        // 读取cookie中的userid

        // 如果没有，自动重定向到登录界面
        // 如果有，读取redux中的user状态

        // 如果user有没有_id,返回null(不做任何显示)

        // 如果有_id，显示对应的界面

        // 根据user的type和header来计算出一个重定向的路由路径，并自动重定向

        /*// 检查用户是否登录，如果没有，自动重定向到登录界面
        const {user} = this.props
        if (!user._id) {
            return <Redirect to='/login' />
        }*/

        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo} />
                    <Route path='/dasheninfo' component={DashenInfo} />
                </Switch>
            </div>
        )
    }
}

export default connect (
    state => ({user: state.user})
)(Main)

/*
* 1. 实现自动登录：
*   1）如果cookie中有userid,发请求获取对应的user,暂时不做任何显示
*   2) 如果cookie中没有userid，自动进入login界面
* 2.如果已经登录，如果请求根路径:
*   根据user的type和header来计算出一个重定向的路由路径，并自动重定向
* */