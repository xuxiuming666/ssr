import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'

class Translation extends Component {

  componentDidMount () {
    this.props.getTranslationList()
  }

  render () {
    const { login, list } = this.props
    if (login) {
      return <div>
        {list.map(item => {
          return <div>{item.title}</div>})
        }
      </div>
    } else {
      return <Redirect to='/' />
    }
  }
}
// Redirect仅限于客户端重定向

Translation.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getTranslationList()) //派发action
  // getHomeList是一个promise
}
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const mapStateToProps = state => ({
  list: state.translate.translateList,
  login: state.header.login
})

export default connect(mapStateToProps, mapDispatchToProps)(Translation)