import React from'react';
import './ExpenseForm.css'
const ExpenseForm =()=>{
    
    const getData= (event)=>{
        console.log(event.target.value)
    }
      
       
   
    return (
    <form id='form' action="">
    <div className='main'>
    <div className='mainForm'>
    <div className='expense-form1'>
    <label className='label'>Title</label>
    <input type="text" onChange={getData} />

    </div>
    <div className='expense-form1'>
    <label className='label'>Amount</label>
    <input type="number" />

    </div>
   
    
    <div className='expense-form1'>
    <label className='label'>Date</label>
    <input type="date" min='2020-01-01' max='2023-03-01'/>

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