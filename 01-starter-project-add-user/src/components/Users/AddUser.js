import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './AddUser.module.css';

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log("enteredUsername", enteredUsername, "enteredAge", enteredAge)
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;