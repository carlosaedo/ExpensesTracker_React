import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {

    const [filterYear, setFilterYear] = useState('2023');

    const yearFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
        console.log(filterYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onFilterSelection={yearFilterHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList
                    items={filteredExpenses}
                />
            </Card>
        </div>
    );
};

export default Expenses;