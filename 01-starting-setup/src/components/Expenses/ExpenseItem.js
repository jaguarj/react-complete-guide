// In order to use state you must use the useState method from React on import.
// To build out your counter, you must use the react state feature.
// import React, { useState } from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
	// const [title, setTitle] = useState(props.title);

	// Built a counter
	// Set the initial count value to 0 using useState.
	// let [count, setCount] = useState(0);

	// const clickHandler = () => {
	// 	Updated the count value using the setCount method on the variable.
	// 	setCount(++count);
	// 	setTitle("updated!!");
	// };

	console.log("I see props in ExpenseItem.js", props);

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date}></ExpenseDate>
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					{/* <h2>{count}</h2> Actual element in the DOM */}
					<div className="expense-item__price">${props.amount}</div>
					{/* <button onClick={clickHandler}>Change Title</button> */}
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;