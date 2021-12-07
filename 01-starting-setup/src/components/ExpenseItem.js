import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
	console.log("expenseItem props = ", props)
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;