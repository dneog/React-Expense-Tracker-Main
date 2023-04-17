import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import Expense from './Expenses';
import './Expenselist.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseForm from '../NewExpense/ExpenseForm';

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
           
            {/* <div className='expenseName'> */}
            <h1 className='name'>{props.name}</h1>
            <div className='am'>
            <h1 className='amount'>$ {amount}</h1>
            {/* </div> */}
           
           
            <button className='btn' onClick={clickHandlerAdd}>Add</button>
            
            <button className='btn' onClick={clickHandler}>Delete Expense</button>   
            </div>     
                   
        </Card>
    )
}
export default Expenselist