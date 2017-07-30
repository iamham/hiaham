import React from 'react'
import Typed from 'typed.js'

import CollapsibleButtonGroup from './CollapsibleButtonGroup/CollapsibleButtonGroup.react'

import './HomePage.styl'

class homepage extends React.Component {
  state = {
    dim: false
  }
  componentDidMount () {
    this.initTypes()
  }
  onPassionateMouseOver = (e) => this.setState({ dim: true })
  onPassionateMouseLeave = (e) => this.setState({ dim: false })
  onCodeClick = (e) => window.open('https://github.com/iamham', '_blank')
  onBlogClick = (e) => window.open('https://medium.com/@imSarun', '_blank')
  onVideoClick = (e) => window.open('https://www.youtube.com/hamgmm', '_blank')
  onStillClick = (e) => window.open('https://500px.com/speetasai', '_blank')
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
        onClick: this.onBlogClick
      }, {
        icon: 'fa fa-github',
        iconStyle: {
          fontSize: 22
        },
        onClick: this.onCodeClick
      }, {
        icon: 'fa fa-youtube',
        onHover: this.onVideoHover,
        onClick: this.onVideoClick
      }, {
        icon: 'fa fa-500px',
        onHover: this.onStillHover,
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
    const homepageClassName = this.state.dim ? 'homepage --dim' : 'homepage'
    const passionateText = this.state.dim
      ? 'passionate = An intense desire or enthusiasm for something. - Oxford Dictionaries'
      : 'passionate'
    return (
      <div className={homepageClassName} data-hiaham='homepage'>
        <div className='homepage__first-section'>
          <div className='homepage__main-content'>
            <div className='homepage__name'>
              SARUN PEETASAI
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
          <div className='homepage__first-section-bottom'>
            <i className="fa fa-hand-o-down" aria-hidden="true"></i> MY PROFILE
          </div>
        </div>

        <div className='homepage__second-section'>
          <div className='homepage__paper-container'>
            <div className='homepage__paper'>
              <h1 className='homepage__name-eng'>Sarun Peetasai</h1>
              <span className='homepage__name-thai'>สรัล ปีตาสัย</span>
              <h2 className='homepage__paper-header'>Work Experiences</h2>
              <h3 className='homepgae__job-title'>Full-Stack Developer at Taskworld</h3>
              <p>November 2015 to present
		'Taskworld is a web based task management application aimed for better work flow 	between team'
	Create an amazing new things is my task there at Taskworld, normally I would come up with a new idea then working closely with the team to design and implement it.
	Javascript (ES6 - NodeJS, ReactJS, Redux), HTML5, CSS3, jQuery
</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default homepage
