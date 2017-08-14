import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/Layout.react'
import HomePage from './components/HomePage.react'

export default (
  <div>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
    </Route>
  </div>
)
