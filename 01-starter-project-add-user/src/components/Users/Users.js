import React from 'react';
import Card from '../UI/Card/Card';
import UsersList from './UsersList';
import './Users.css';

const Users = (props) => {
    console.log("Inside users, props", props)

    return (
        <div>
            <Card>
                <UsersList userDataList={props.data}></UsersList>
            </Card>
        </div>

    )
};

export default Users;