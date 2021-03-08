import { TRANSLATE_LIST  } from './contants'
const defaultState = {
  translateList: []
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case TRANSLATE_LIST:
      return {
        ...state,
        translateList: action.list
      }
    default:
      return state
  }
}