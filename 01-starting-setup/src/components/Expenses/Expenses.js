import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [enteredFilteredDate, setEnteredFilteredDate] = useState('2020');

    const expensesFilterChangeDateHandler = (enteredExpensesFilterDate) => {
        setEnteredFilteredDate(enteredExpensesFilterDate);
    };

    return (
        <div>
            <Card className="expenses">
                {/* 'selected' is the initial state I want as a default. */}
                {/* 'onExpensesFilterChangeData' is the state that will change/set by the users' selection. */}
            <ExpenseFilter selected={enteredFilteredDate} onExpensesFilterChangeData={expensesFilterChangeDateHandler}/>
                <ExpenseItem
                    title={props.data[0].title}
                    amount={props.data[0].amount}
                    date={props.data[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.data[1].title}
                    amount={props.data[1].amount}
                    date={props.data[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.data[2].title}
                    amount={props.data[2].amount}
                    date={props.data[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.data[3].title}
                    amount={props.data[3].amount}
                    date={props.data[3].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}


export default Expenses;