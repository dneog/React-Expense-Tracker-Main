import { useState } from 'react';
import ExpenseDetails from './Components/Expenses/ExpenseDetails';
import Expenselist from './Components/Expenses/Expenselist';
import NewExpense from './Components/NewExpense/NewExpense';
import Expense from './Components/Expenses/Expenses';

const dummyExpenses= [
  {
  id: 'e1',
  name: 'Car Insurence',
  date: new Date(2021, 3, 22),
  amount: 650
  },

  {
  id: 'e2',
  name: 'Books',
  date:new Date(2021, 2, 28),
  amount: 550
  },

  {
  id: 'e3',
  name: 'Headphones',
  date: new Date(2021, 4, 18),
  amount: 780
  }
]

const App=()=> {

  const [expenses, setExpenses]= useState(dummyExpenses);


const addExpenseHandler=( expense) =>{
  setExpenses((prevExpenses)=> {
    return [expense, ...prevExpenses]
  });
  
}




  return (
   
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    
    
    <Expense items={expenses} />
    
    </div>
   
  )
}

export default App;
