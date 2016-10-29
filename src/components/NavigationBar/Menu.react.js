import React from 'react'
import _ from 'lodash'

import './Menu.styl'

const Menu = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired
  },
  render () {
    const items = _.map(this.props.menuItems, (item) => (
      <li><a href={item.link}>{item.title}</a></li>)
    )
    return (
      <nav className='menu'>
        <ul className='menu__items'>
          {items}
        </ul>
      </nav>
    )
  }
})

export default Menu
