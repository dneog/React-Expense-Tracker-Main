import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import './Expenselist.css';
import Card from '../UI/Card';

const Expenselist=(props)=>{
    
    console.log(useState(props.name))
    const clickHandler=(event)=>{
     event.target.parentElement.parentElement.remove();

    }
    let [amount, setTitle]= useState(props.amount);
    const clickHandlerAdd=()=>{
      
       setTitle('100')

    }
  
    return (
        <Card className='expense-Item'>
        <div className="expense-date">
          <ExpenseDate date={props.date} />
          </div>
           <div className="expense-details">
            <ExpenseDetails  name={props.name} amount={amount} />

           

           
            <button onClick={clickHandlerAdd}>Add</button>
            <button onClick={clickHandler}>Delete Expense</button>
        
            </div>
           
        </Card>
    )
}
export default Expenselist