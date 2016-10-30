import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

import './Menu.styl'

const Menu = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired
  },
  render () {
    const items = _.map(this.props.menuItems, (item) => (
      <li key={item.title} data-hiaham={item.title}>
        <Link to={`/${item.link}`}>{item.title}</Link>
      </li>)
    )
    console.log(items)
    return (
      <nav className='menu' data-hiaham='menu'>
        <ul className='menu__items'>
          {items}
        </ul>
      </nav>
    )
  }
})

export default Menu
