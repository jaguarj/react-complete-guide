import React from 'react';
import Card from '../UI/Card/Card';
import classes from './UsersList.module.css';


const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.userDataList.map(user =>
                    <li id={user.id} key={user.id}>{user.name} ({user.age} years old)</li>
                )}
            </ul>
        </Card>
    )
};

export default UsersList;