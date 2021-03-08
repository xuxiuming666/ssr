import { CHANGE_LOGIN } from './contants'
const defaultState = {
  login: true
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state
  }
}
// 最先配置路由
// 1.先写recuder，在index.js导出reducer
// 2. store/index conbine all reducer
// 3. 高阶组件 connect(mapStateToProps, mapDispatchToProps)(Header)
// 4. 派发action, 编写action