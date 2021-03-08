import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  render () {
    return <div>
    {/* <div>this is {this.props.name}</div> */}
    {
      this.props.list.map(item => {
        return <div>{item.title}</div>
      })
    }
    <button onClick={()=>{ alert('click') }}>click</button>
  </div>
  }
}

Home.loadData = (store) => {
  // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList()) //派发action
  // getHomeList是一个promise
}
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

const mapStateToProps = state => ({
  list: state.home.newsList,
  name: state.home.name
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)