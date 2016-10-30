import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './components/layout.react'
import HomePage from './components/homepage.react'
import AboutMe from './components/aboutme.react'
import NotFound from './components/notfound.react'

export default (
  <div>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='/aboutMe' component={AboutMe} />
    </Route>

    <Route path='*' component={NotFound} />
  </div>
)
