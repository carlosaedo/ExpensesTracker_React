import React, { useState } from 'react';

import { DUMMY_DATA } from '../../App';

import './ExpensesFilter.css';

const ExpensesFilter = props => {

    const availableDatesRaw = DUMMY_DATA.map((item) => {
        return item.date.getFullYear().toString();
    });
    const availableDates = [new Date().getFullYear(), ...new Set(availableDatesRaw)];



    const filterHandler = (event) => {
        props.onFilterSelection(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterHandler}>
                    {availableDates.map(item => {
                        return <option key={item} value={item}>{item}</option>;
                    })}

                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;