import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout.react'
import HomePage from './components/HomePage.react'
import NotFound from './components/NotFound.react'

export default (
  <div>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
    </Route>

    <Route path='*' component={NotFound} />
  </div>
)
