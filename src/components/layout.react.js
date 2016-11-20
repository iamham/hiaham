import Helmet from 'react-helmet'
import React from 'react'

import TopNavation from './NavigationBar/TopNavigation.react.js'

import './base.styl'
import './layout.styl'

const layout = React.createClass({
  propTypes: {
    children: React.PropTypes.object,
    location: React.PropTypes.object
  },
  getAdditionClass (pathName) {
    switch (pathName) {
      case '/about':
      case 'about':
        return ' --bright'
      default: return ' --bright'
    }
  },
  render () {
    const menuItems = [
      { title: 'Me', link: 'about' },
      { title: 'Portfolio', link: 'portfolio' },
      { title: 'Medium', link: 'medium' }
    ]
    const additionClass = this.getAdditionClass(this.props.location.pathname)
    return (
      <div data-hiaham='layout' className='layout'>
        <TopNavation
          menuItems={menuItems}
          additionClass={additionClass}
        />
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
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
})

export default layout
