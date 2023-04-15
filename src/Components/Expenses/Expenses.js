import React, { useState } from 'react'
import Card from '../UI/Card';
import Expenselist from './Expenselist';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import ExpenseForm from '../NewExpense/ExpenseForm';

function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return(
        <>
        <ExpenseFilter selected={filteredYear} onChangeFilter= {filterChangeHandler} />
    <Expenselist
        name = {props.items[0].name}
        amount = {props.items[0].amount}
        date={props.items[0].date}
    />
    <Expenselist
        name = {props.items[1].name}
        amount = {props.items[1].amount}
        date={props.items[1].date}
    />
    <Expenselist
        name = {props.items[2].name}
        amount = {props.items[2].amount}
        date={props.items[2].date}
    />

   
   
    </>

    )
}
export default Expense;