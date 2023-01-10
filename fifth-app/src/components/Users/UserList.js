import React, { Component } from 'react'
import Card from '../UI/Card';
import classes from './UserList.module.css';

export default class UserList extends Component {
    render() {
        return (
            <Card className={classes.users}>
                <ul>
                    {this.props.userList.map((user, index) => <li key={index}>{user.username} is {user.age} years old.</li>)}
                </ul>
            </Card>
        )
    }
}
