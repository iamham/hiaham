import Helmet from 'react-helmet'
import React from 'react'

import './base.styl'
import './layout.styl'

class layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
    location: React.PropTypes.object
  }
  render () {
    return (
      <div data-hiaham='layout' className='layout'>
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
}

export default layout
