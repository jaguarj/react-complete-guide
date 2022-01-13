import React, { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './AddUser.module.css';

const AddUser = (props) => {
	// ======================== 
	// Refs should only be used for 'read-only' data; you
	// shouldn't manipulate the DOM with them, and if you do, this is called
	// 'uncontrolled components' b/c we are controlling the state by setting values
	// without using React but instead the native DOM Api.
	// The logic is set locally as internal state so the value is not controlled by React.

	// 'Controlled components' are components which uses React 'useState'
	// which in turn feeds data back into the component.
	// ========================

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();

		console.log("nameInputRef", nameInputRef.current.value, "ageInputRef", ageInputRef.current.value)

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input", 
				message: "Please enter a valid input value."
			});
			return;
		};

		if (+enteredAge < 1) {
			setError({
				title: "Invalid age", 
				message: "Please enter a valid age greater than 0."
			});
			return;
		};
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (e) => {setEnteredUsername(e.target.value)};
	const ageChangeHandler = (e) => {setEnteredAge(e.target.value)};
	const errorHandler = () => {setError(null)}

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input 
						id="username" 
						type="text" 
						value={enteredUsername} 
						onChange={usernameChangeHandler}
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input 
						id="age" 
						type="number" 
						value={enteredAge} 
						onChange={ageChangeHandler} 
						ref={ageInputRef}
					/>
					<Button type="submit" onClick={addUserHandler}>Add User</Button>
				</form>
			</Card>
		</div>
	)
};

export default AddUser;