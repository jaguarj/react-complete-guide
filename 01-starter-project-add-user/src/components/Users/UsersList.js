import React from 'react';
import UsersItem from './UsersItem';
import './UsersList.css';

const UsersList = (props) => {
    console.log("Inside UsersList", props);

    return (
           <ul className="ul">
            {props.userDataList.map(user => (
                <UsersItem 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                />
            ))}
           </ul>
    )
};

export default UsersList;