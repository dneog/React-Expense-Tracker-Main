
import Expenselist from './Components/Expenses/Expenselist';
import NewExpense from './Components/Expenses/NewExpense/NewExpense';
const App=()=> {
const expenses= [
  {
  id: 'e1',
  // location: 'Location Of Expenditure',
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
  },
]


  return (
   
    <div>
    <NewExpense />
    <Expenselist name={expenses[0].name}  amount={expenses[0].amount}  date={expenses[0].date}></Expenselist>
    <Expenselist name={expenses[1].name} amount={expenses[1].amount}  date={expenses[1].date}></Expenselist>
    <Expenselist name={expenses[2].name} amount={expenses[2].amount}  date={expenses[2].date}></Expenselist>
    
    
    </div>
   
  )
}

export default App;
