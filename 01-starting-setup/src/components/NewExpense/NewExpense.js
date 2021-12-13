import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // console.log("props ", props)
    // Need to be able to hid the expense form after a new expense has
    // been added.

    // Need to hide the expense form on 'cancel' when clicked.

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log("expenseData", expenseData)
        props.onAddNewExpense(expenseData);
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseDataHandler}/> */}
        </div>
    );
};

export default NewExpense;