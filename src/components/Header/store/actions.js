import axios from 'axios'
import { CHANGE_LOGIN } from './contants'
const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})
export const getHeaderInfo = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/login').then(res => {
      dispatch(changeLogin(res.data.login))
    })
  }
}

export const login = () => {
  return (dispatch) => {
    const data = {
      login: true
    }
    return axios.patch('http://localhost:3000/login', data).then(res => {
      dispatch(changeLogin(true))
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    const data = {
      login: false
    }
    return axios.patch('http://localhost:3000/login', data).then(res => {
      dispatch(changeLogin(false))
    })
  }
}