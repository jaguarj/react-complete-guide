import React from 'react';
import Card from '../UI/Card/Card';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';
import './Users.css';

const Users = (props) => {
    console.log("Inside users, props", props)

    const addNewUserPayload = (user) => {
        console.log("user", user)
    }

    return (
        <div>
            <Card>
                <NewUserForm addNewUserPayload={addNewUserPayload}/>
                <UsersList userDataList={props.data}></UsersList>
            </Card>
        </div>

    )
};

export default Users;