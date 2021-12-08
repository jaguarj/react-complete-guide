import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
	const [title, setTitle] = useState(props.title);
	// Built a counter
	// let [count, setCount] = useState(0);

	const clickHandler = () => {
		// Updated the count value.
		// setCount(++count);
		setTitle("updated!!");
	};

	return (
		<div>
			<Card className="expense-item">
				<ExpenseDate date={props.date}></ExpenseDate>
				<div className="expense-item__description">
					<h2>{title}</h2>
					{/* <h2>{count}</h2> Actual element in the DOM */}
					<div className="expense-item__price">${props.amount}</div>
					<button onClick={clickHandler}>Change Title</button>
				</div>
			</Card>
		</div>
	);
}

export default ExpenseItem;