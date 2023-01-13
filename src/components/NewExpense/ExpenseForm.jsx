import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
    const [inputText, setInputText] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const inputAmountHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const inputDateHandler = (event) => {
        setInputDate(event.target.value);
    };
    //or
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const inputTextHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value }
    //     });
    // };

    // const inputAmountHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value }
    //     });
    // };

    // const inputDateHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value }
    //     });
    // };

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: inputText,
            amount: +inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveExpenseData(expenseData);
        if (expenseData.title !== "" && expenseData.amount !== "" && expenseData.date !== "") {
            setInputText('');
            setInputAmount('');
            setInputDate('');
        }
    };

    return (
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={inputTextHandler} value={inputText} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={inputAmountHandler} value={inputAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2030-12-31" onChange={inputDateHandler} value={inputDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;