import React from 'react';

import './UsersItem.css';

const UsersItem = (props) => {
    console.log("I see userItem props", props)

    return (
        <li id={props.id}>
            {props.name}
        </li>
    )
};

export default UsersItem;