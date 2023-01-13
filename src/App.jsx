import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Product 17728634',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Product 83626567',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'Product 47673255',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Product 71287885',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Product 10546757',
    amount: 200,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    console.log("in app.js");
    console.log(expense);
    if (expense.title !== "" && expense.amount !== "" && expense.date !== "") {
      setExpenses((prevData) => {
        return [expense, ...prevData]
      });
    }


  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
export { DUMMY_DATA };