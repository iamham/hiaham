import React from 'react'
import Menu from './Menu.react'

import './TopNavigation.styl'

const TopNavigation = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired,
    onHomeClick: React.PropTypes.func
  },
  render () {
    return (
      <div className='navigation'>
        <div className='navigation__container'>
          <div className='navigation__left'>
            <div className='navigation__logo-container'>
              <img src={require('./images/logo_header.png')}
                onClick={this.onHomeClick}
                className='navigation__logo'
              />
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
