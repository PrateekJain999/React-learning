import React, { Component } from 'react'
import classes from './Button.module.css'

export default class Button extends Component {
    render() {
        return (
            <button className={classes.button} type={this.props.buttonType || 'button'} onClick={this.props.buttonHandler} >{this.props.children}</button>
        )
    }
}
