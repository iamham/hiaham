import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import './CollapsibleButtonGroup.styl'

class CollapsibleButtonGroup extends React.Component {
    static propTypes = {
        buttons: PropTypes.array.isRequired,
        collapse: PropTypes.bool,
    }

    renderButton = (button, index) => {
        return (
            <div className='collapsible-button-group__button' onClick={button.onClick} onMouseOver={button.onMouseOver} onMouseLeave={button.onMouseLeave} key={index}>
                <div className='collapsible-button-group__button-container'>
                    <div className='collapsible-button-group__button-icon' style={button.iconStyle}>
                        <i className={button.icon} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }

    renderButtons = () => _.map(this.props.buttons, this.renderButton)

    render () {
        return (
            <div className='collapsible-button-group'>
                {this.renderButtons()}
            </div>
        )
    }
}

export default CollapsibleButtonGroup
