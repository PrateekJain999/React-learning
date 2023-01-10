import React, { Component } from 'react'
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

export default class ErrorModal extends Component {

    render() {
        return (
            <div>
                <div className={classes.backdrop} onClick={this.props.closeErrorModal} >
                    <Card className={classes.modal} >
                        <header className={classes.header} >
                            <h2>{this.props.title}</h2>
                        </header>
                        <div className={classes.content} >
                            <p>{this.props.message}</p>
                        </div>
                        <footer className={classes.actions} >
                            <Button onClick={this.props.closeErrorModal} >Close</Button>
                        </footer>
                    </Card>
                </div>
            </div>
        )
    }
}
