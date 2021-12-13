import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    // 1. Set the initial date for the expenses list.
    const [enteredFilteredDate, setEnteredFilteredDate] = useState('2020');

    // 2. Filter out the expense list by the filtered date year.
    // Filter method returns a new array and does not mutate the initial array.
    const filteredExpensesArray = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === enteredFilteredDate;
    });

    const expensesFilterChangeDateHandler = (enteredExpensesFilterDate) => {
        setEnteredFilteredDate(enteredExpensesFilterDate);
    };

    let expenseContent = <p>No Expenses found...</p>;

    if (filteredExpensesArray.length > 0) {
        expenseContent = filteredExpensesArray.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))
    };

    return (
        <div>
            <Card className="expenses">
                {/* 'selected' is the initial state I want as a default. */}
                {/* 'onExpensesFilterChangeData' is the state that will change/set by the users' selection. */}
                <ExpenseFilter selected={enteredFilteredDate} onExpensesFilterChangeData={expensesFilterChangeDateHandler} />
                {expenseContent}
            </Card>
        </div>
    );
};


export default Expenses;