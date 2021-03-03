import express from 'express'
import { render } from './utils'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
const app = express()
const port = 3001
app.use(express.static('public')); //只要使用静态文件，就到public里寻找
app.get('*', (req, res) => {
  const store = getStore()
  //得到异步数据填充到store里。异步数据要结合请求地址和路由做判断。
  const matchedRoutes =  matchRoutes(routes, req.path)
  console.log(matchedRoutes)
  // 让matchRoutes里面所有组件对应的loadData都执行一次
  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
})

app.listen(port)


//自动打包 --watch
// nodemon 监听源代码。只要发生改变就执行
// 根路径下渲染html，遇到script便签后，从public下找到静态文件