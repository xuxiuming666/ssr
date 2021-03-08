import axios from 'axios'
import { TRANSLATE_LIST } from './contants'
const translateList = (list) => ({
  type: TRANSLATE_LIST,
  list
})
export const getTranslationList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/translation').then(res => {
      const list = res.data
      dispatch(translateList(list))
    }) //加上return使得返回结果变成promise
  }
}