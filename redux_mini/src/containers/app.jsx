/*
*  容器组件
* */

import React from 'react'
// import {connect} from 'react-redux'
import {connect} from '../libs2/react-redux'

import Counter from '../components/counter'
import {increment, decrement, addMsg} from '../redux/actions'

export default connect(
    state => ({
        count: state.count,
        msgs: state.msgs
    }),
    {increment, decrement, addMsg}
)(Counter)
