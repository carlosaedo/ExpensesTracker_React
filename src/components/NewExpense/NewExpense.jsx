import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [showFormNew, setShowFormNew] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowFormNew(false);
    };

    const showNewExpenseFormHandler = () => {
        setShowFormNew(true);
    };

    const hideNewExpenseFormHandler = () => {
        setShowFormNew(false);
    };

    return (
        <div className='new-expense'>
            {!showFormNew && <button onClick={showNewExpenseFormHandler} type="button">Add new expense</button>}
            {showFormNew && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideNewExpenseFormHandler} />}
        </div>
    );
};

export default NewExpense;