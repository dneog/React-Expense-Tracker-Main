import React, { useState } from'react';
import './ExpenseForm.css'
const ExpenseForm =(props)=>{
    const [enteredTitle, SetEnteredTitle]= useState('');
    const [enteredAmount, SetEnteredAmount]= useState('');
    const [enteredDate, SetEnteredDate]= useState('');

    const titleHandler=(event)=>{
        SetEnteredTitle(event.target.value)
    }
  
    const amountHandler=(event)=>{
        SetEnteredAmount(event.target.value)
    }
    const dateHandler=(event)=>{
        SetEnteredDate(event.target.value)
    }
  
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData={
            name: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        SetEnteredTitle('')
        SetEnteredAmount('')
        SetEnteredDate('')
        
    }  
       
   
    return (
    <form onSubmit={submitHandler}>
    <div className='main'>
    <div className='mainForm'>
    <div className='expense-form1'>
    <label className='label'>Title</label>
    <input value={enteredTitle} type="text" onChange={titleHandler} />

    </div>
    <div className='expense-form1'>
    <label className='label'>Amount</label>
    <input value={enteredAmount} type="number" onChange={amountHandler} />

    </div>
   
    
    <div className='expense-form1'>
    <label className='label'>Date</label>
    <input value={enteredDate} type="date" min='2020-01-01' max='2023-03-01' onChange={dateHandler}/>

    </div>
    </div>
    <div className='submit'>
    <button id='submit' className='button' type='submit' >Add Expense</button>
    <button type='button' className='buttons' onClick={props.onCancel}>Cancel</button>
    </div>
    </div>
    
    </form>
    
    )
    

    

}
export default ExpenseForm;