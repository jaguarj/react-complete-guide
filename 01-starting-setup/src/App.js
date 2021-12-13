import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);
    // prevExpenses is already the last state by default when 
    // using the function passed as an argument to the setExpenses().
    // prevExpenses is given to you by default as the last state snapshot.
    // So no need to fret about what or where this variable is coming from.
    setExpenses((prevExpenses) => { 
      return [expense, ...prevExpenses] 
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
};

export default App;
