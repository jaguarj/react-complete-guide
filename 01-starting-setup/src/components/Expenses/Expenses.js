import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    // 1. Set the initial date for the expenses list.
    const [enteredFilteredDate, setEnteredFilteredDate] = useState('2021');

    // 2. Filter out the expense list by the filtered date year.
    // Filter method returns a new array and does not mutate the initial array.
    const filteredExpensesArray = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === enteredFilteredDate;
    });

    const expensesFilterChangeDateHandler = (enteredExpensesFilterDate) => {
        setEnteredFilteredDate(enteredExpensesFilterDate);
    };

    return (
        <div>
            <Card className="expenses">
                {/* 'selected' is the initial state I want as a default. */}
                {/* 'onExpensesFilterChangeData' is the state that will change/set by the users' selection. */}
                <ExpenseFilter selected={enteredFilteredDate} onExpensesFilterChangeData={expensesFilterChangeDateHandler} />
                <ExpensesList data={filteredExpensesArray}/>
            </Card>
        </div>
    );
};


export default Expenses;