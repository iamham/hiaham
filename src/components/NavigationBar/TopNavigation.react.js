import React from 'react'
import Menu from './Menu.react'

import { Link } from 'react-router'

import './TopNavigation.styl'

const TopNavigation = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired,
    additionClass: React.PropTypes.string
  },
  render () {
    const className = 'navigation' + this.props.additionClass
    return (
      <div className={className} data-hiaham='topNav'>
        <div className='navigation__container'>
          <div className='navigation__left'>
            <div className='navigation__logo-container'>
              <Link to='/'>
                <img src={require('./images/logo_header.png')}
                  className='navigation__logo'
                />
              </Link>
            </div>
          </div>
          <div className='navigation__spacer' />
          <div className='navigation__right'>
            <Menu menuItems={this.props.menuItems} />
          </div>
        </div>
      </div>
    )
  }
})

export default TopNavigation
