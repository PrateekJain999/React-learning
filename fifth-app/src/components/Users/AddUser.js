import React, { Component } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

export default class AddUser extends Component {

    constructor(){
        super()
        this.state = { username: '', age: 0, isErrorOccured: false, title: '', message: '' };
        this.saveUserInfo = this.saveUserInfo.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.userAgeChange = this.userAgeChange.bind(this);
        this.closeErrorModal = this.closeErrorModal.bind(this);
    }
    saveUserInfo(event) {
        event.preventDefault();
        if(this.state.username.trim().length === 0 || this.state.age.trim().length === 0){
            this.setState({
                isErrorOccured: true,
                title: 'Invalid username',
                message: 'Please enter a valid username and age.'
            });
            return;
        }
        if(+this.state.age < 0){
            this.setState({
                isErrorOccured: true,
                title: 'Invalid age',
                message: 'Please enter age (> 0).'
            });
            return;
        }
        this.props.saveUserInfo({ username: this.state.username, age: this.state.age });
        this.setState({ username: '', age: 0 });
    }

    userNameChange(event) {
        this.setState({ username: event.target.value });
    }

    userAgeChange(event){
        this.setState({ age: event.target.value });
    }

    closeErrorModal(){
        this.setState({ isErrorOccured: false });
    }

    render() {
        return (
            <div>
                { this.state.isErrorOccured && <ErrorModal title={this.state.title} message={this.state.message} closeErrorModal={this.closeErrorModal} />}
                <Card className={classes.input}>
                    <form onSubmit={this.saveUserInfo}>
                        <label htmlFor='username'>User Name</label>
                        <input id='username' type='text' onChange={this.userNameChange} value={this.state.username} />
                        <label>Age</label>
                        <input htmlFor='userAge' type='number' onChange={this.userAgeChange} value={this.state.age} />
                        <Button id='userAge' buttonType='submit'>Add User</Button>
                    </form>

                </Card>
            </div>
        )
    }
}
