import React from 'react';
import Card from '../UI/Card/Card';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';
import './Users.css';

const Users = (props) => {
    console.log("Inside users, props", props)

    return (
        <div>
            <Card>
                <NewUserForm />
                <UsersList userDataList={props.data}></UsersList>
            </Card>
        </div>

    )
};

export default Users;