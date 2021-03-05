import axios from 'axios'
import { CHANGE_LIST } from './contants'
const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/note').then(res => {
      const list = res.data
      dispatch(changeList(list))
    }) //加上return使得返回结果变成promise
  }
}