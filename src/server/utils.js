import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (store, routes, req, context) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(routes)}
            {/* {routes.map(route => (
              <Route {...route} />))
            } */}
          </div>
        </StaticRouter>
      </Provider>) //location获取路径

      const cssStr = context.css.length ? context.css.join('\n') : ''
      return `
      <html>
        <head>
          <title>hello</title>
          <style>${cssStr}</style>
        </head>
        <body>
          <div id='root'>${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src='/index.js'></script>
        </body>
      </html>
    `
}
