import React, { Component } from 'react';
import classes from './Card.module.css';

export default class card extends Component {
    render() {
        return (
            <div className={`${classes.card} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}
