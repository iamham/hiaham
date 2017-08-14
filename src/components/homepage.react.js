import React from 'react'
import Typed from 'typed.js'

import CollapsibleButtonGroup from './CollapsibleButtonGroup/CollapsibleButtonGroup.react'

import './HomePage.styl'

const lastName = 'Peetasai'

class homepage extends React.Component {
  state = {
    dim: false,
    lastName: lastName
  }
  componentDidMount () {
    this.initTypes()
  }
  onPassionateMouseOver = (e) => this.setState({ dim: true })
  onPassionateMouseLeave = (e) => this.setState({ dim: false })

  onCodeHover = (e) => this.setState({ lastName: 'github' })
  onCodeLeave = (e) => this.resetLastname()
  onCodeClick = (e) => window.open('https://github.com/iamham', '_blank')
  onBlogHover = (e) => this.setState({ lastName: 'blog' })
  onBlogLeave = (e) => this.resetLastname()
  onBlogClick = (e) => window.open('https://medium.com/@imSarun', '_blank')
  onVideoHover = (e) => this.setState({ lastName: 'video' })
  onVideoLeave = (e) => this.resetLastname()
  onVideoClick = (e) => window.open('https://www.youtube.com/hamgmm', '_blank')
  onStillHover = (e) => this.setState({ lastName: 'gallery' })
  onStillLeave = (e) => this.resetLastname()
  onStillClick = (e) => window.open('https://500px.com/speetasai', '_blank')

  resetLastname = () => this.setState({ lastName: lastName})

  initTypes () {
    const passionate = new Typed('#passionate', {
      strings: [' Photography', ' Cinematography', 'People'],
      typeSpeed: 60,
      backSpeed: 20,
      startDelay: 200,
      loop: true
    })
    return passionate
  }
  renderButtonGroup = () => {
    const buttons = [
      {
        icon: 'fa fa-medium',
        onMouseOver: this.onBlogHover,
        onMouseLeave: this.onBlogLeave,
        onClick: this.onBlogClick
      }, {
        icon: 'fa fa-github',
        iconStyle: {
          fontSize: 22
        },
        onMouseOver: this.onCodeHover,
        onMouseLeave: this.onCodeLeave,
        onClick: this.onCodeClick
      }, {
        icon: 'fa fa-youtube',
        onMouseOver: this.onVideoHover,
        onMouseLeave: this.onVideoLeave,
        onClick: this.onVideoClick
      }, {
        icon: 'fa fa-500px',
        onMouseOver: this.onStillHover,
        onMouseLeave: this.onStillLeave,
        onClick: this.onStillClick
      }
    ]
    return this.state.dim ? null : (
      <div className='homepage__main-button-group'>
        <CollapsibleButtonGroup buttons={buttons} collapse />
      </div>
    )
  }
  render () {
    const lastName = this.state.lastName
    const homepageClassName = this.state.dim ? 'homepage --dim' : 'homepage --' + this.state.lastName
    const passionateText = this.state.dim
      ? 'passionate = An intense desire or enthusiasm for something. - Oxford Dictionaries'
      : 'passionate'
    return (
      <div className={homepageClassName} data-hiaham='homepage'>
        <div className='homepage__full-background' />
        <div className='homepage__first-section'>
          {/* <div className='homepage__profile-button'>PROFILE</div> */}
          <div className='homepage__main-content'>
            <div className='homepage__logo'>
              <img src={require('./images/hiaham.png')} />
            </div>
            <div className='homepage__text-content'>
              <div className='homepage__name'>
                Sarun {lastName}
              </div>
              <div className='homepage__tag-line'>
                a pixel perfect <span className='homepage__highlight'>Developer </span>
                <span className='homepage__expandable'
                  onMouseOver={this.onPassionateMouseOver}
                  onMouseLeave={this.onPassionateMouseLeave}>{passionateText}</span> about
                <span className='homepage__highlight' id='passionate' /><br />
                based in Bangkok, Land of Smile
              </div>
              {this.renderButtonGroup()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default homepage
