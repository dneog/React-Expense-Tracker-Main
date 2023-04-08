import React, { useState } from'react';
import './ExpenseForm.css'
const ExpenseForm =()=>{
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
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
    }  
       
   
    return (
    <form onSubmit={submitHandler}>
    <div className='main'>
    <div className='mainForm'>
    <div className='expense-form1'>
    <label className='label'>Title</label>
    <input type="text" onChange={titleHandler} />

    </div>
    <div className='expense-form1'>
    <label className='label'>Amount</label>
    <input type="number" onChange={amountHandler} />

    </div>
   
    
    <div className='expense-form1'>
    <label className='label'>Date</label>
    <input type="date" min='2020-01-01' max='2023-03-01' onChange={dateHandler}/>

    </div>
    </div>
    <div className='submit'>
    <button id='submit' className='button' type='submit' >Add Expense</button>
    </div>
    </div>
    
    </form>
    
    )
    

    

}
export default ExpenseForm;