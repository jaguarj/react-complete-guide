import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [addNewExpenses, setAddNewExpenses] = useState(false)
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddNewExpense(expenseData);
        setAddNewExpenses(false);
    };

    const addNewExpensesHandler = () => {
        setAddNewExpenses(true);
    };

    const cancelHandler = () => {
        setAddNewExpenses(false);
    };

    return (
        <div className="new-expense">
            {!addNewExpenses && <button type='submit' onClick={addNewExpensesHandler}>Add New Expense</button>}
            {addNewExpenses && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
        </div>
    );
};

export default NewExpense;