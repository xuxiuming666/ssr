import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as headerReducer } from '../components/Header/store/index'
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultState = window.isSecureContext.state
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}