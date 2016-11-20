import React from 'react'

import './about.styl'

const About = React.createClass({
  render () {
    return (
      <div className='about' data-hiaham='about'>
        <div className='about__container'>
          <div className='about__text'>
            <div className='about__header'>
              <div className='about__name'>Hi, I’m Sarun Peetasai.</div>
              <p className='about__description'>
                a pixel perfect developer, passionate in Art, People, Technology<br />
                Born and live in Bangkok
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default About
