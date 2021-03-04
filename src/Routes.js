// import React from 'react'
// import { Route } from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'

export default [{
  path: '/',
  component: App,
  routes: [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home'
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]
}]





// (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )