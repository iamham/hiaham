import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

const app = document.getElementById('app')
render(createRouter(routes), app)

function createRouter (routes, key) {
  const history = browserHistory
  return (
    <Router history={history} key={Date.now()}>
      {routes}
    </Router>
  )
}
