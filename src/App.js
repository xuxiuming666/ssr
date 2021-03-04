import React from 'react'
import Header from '../src/components/Header'
import { renderRoutes } from 'react-router-config'
// import routes from '../src/Routes'
const App = (props) => {
  console.log(props)
  return <div>
    <Header />
    {renderRoutes(props.route.routes)}
  </div>
}
export default App