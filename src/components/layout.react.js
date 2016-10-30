import Helmet from 'react-helmet'
import React from 'react'

import TopNavation from './NavigationBar/TopNavigation.react.js'

import './base.styl'

const layout = React.createClass({
  render () {
    const menuItems = [
      { title: 'Home', link: 'home' },
      { title: 'About Me', link: 'aboutMe' },
      { title: 'Portfolio', link: 'portfolio' },
      { title: 'Blog', link: 'blog' }
    ]
    return (
      <div data-hiaham='layout'>
        <TopNavation menuItems={menuItems} data-hiaham='topNav' />
        <Helmet
          defaultTitle='hiaHAM | Art, Technology, People'
          meta={[
            {'name': 'description', 'content': 'hiaHAM | Sarun Peetasai | สรัล ปีตาสัย | a person who loves Art, Technology and People'},
            {'property': 'og:locale', 'content': 'en_US'},
            {'property': 'og:type', 'content': 'website'},
            {'property': 'og:title', 'content': 'hiaHAM | Art, Technology, People'},
            {'property': 'og:description', 'content': 'hiaHAM | Sarun Peetasai | สรัล ปีตาสัย | a person who loves Art, Technology and People'},
            {'property': 'og:url', 'content': 'https://hiaham.com/'},
            {'property': 'og:site_name', 'content': 'hiaHAM'},
            {'name': 'twitter:card', 'content': 'summary'},
            {'name': 'twitter:description', 'summary': 'hiaHAM | Sarun Peetasai | สรัล ปีตาสัย | a person who loves Art, Technology and People'},
            {'name': 'twitter:title', 'content': 'hiaHAM | Art, Technology, People'},
            {'name': 'twitter:site', 'content': '@imsarun'},
            {'name': 'twitter:creator', 'content': '@imsarun'}
          ]}
        />
      </div>
    )
  }
})

export default layout
