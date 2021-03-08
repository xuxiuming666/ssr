import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getHeaderInfo, login, logout } from './store/actions'

class Header extends Component {

  componentDidMount () {
    this.props.getHeaderInfo()
  }
  render () {
    const { handleLogin, login, handleLogout } = this.props
    return <div>
      <Link to='/'>Home</Link>
      <br />
      {
        login ? <Fragment>
          <Link to='/translation'>translate</Link>
        <br />
        <button onClick = {handleLogout}>Logout</button>
      </Fragment> : <button onClick = {handleLogin}>Login</button>
    }
  </div>
  }
}

Header.loadData = (store) => {
  return store.dispatch(getHeaderInfo()) //派发action
}
const mapDispatchToProps = dispatch => ({
  getHeaderInfo() {
    dispatch(getHeaderInfo())
  },
  handleLogin () {
    dispatch(login())
  },
  handleLogout () {
    dispatch(logout())
  }
})

const mapStateToProps = (state) => ({
  login: state.header.login
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)