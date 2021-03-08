import React from 'react'
import Header from '../src/components/Header/index.js'
import { renderRoutes } from 'react-router-config'
import { actions } from './components/Header/store/index'
// import routes from '../src/Routes'
const App = (props) => {
  return <div>
    <Header staticContext={props.staticContext} />
    {renderRoutes(props.route.routes)}
  </div>
}

App.loadData = (store) => {
 return store.dispatch(actions.getHeaderInfo())
}
export default App