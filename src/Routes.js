// import React from 'react'
// import { Route } from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import Translation from './containers/Translation'
import NotFound from './containers/NotFound'

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home'
  },
  {
    path: '/translation',
    component: Translation,
    exact: true,
    loadData: Translation.loadData,
    key: 'translation'
  },
  {
    component: NotFound
  }
]
}]





// (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )