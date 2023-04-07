
import Expenselist from './Components/Expenses/Expenselist';

const App=()=> {
const expenses= [
  {
  id: 'e1',
  location: 'Location Of Expenditure',
  name: 'Car Insurence',
  date: new Date(2021, 3, 22),
  amount: 650
  },
  {
  id: 'e2',
  location: 'Location Of Expenditure',
  name: 'Books',
  date:new Date(2021, 2, 28),
  amount: 550
  },
  {
  id: 'e3',
  location: 'Location Of Expenditure',
  name: 'Headphones',
  date: new Date(2021, 4, 18),
  amount: 780
  },
]


  return (
    <div>
    <Expenselist name={expenses[0].name} location={expenses[0].location}  amount={expenses[0].amount}  date={expenses[0].date}></Expenselist>
    <Expenselist name={expenses[1].name} location={expenses[1].location} amount={expenses[1].amount}  date={expenses[1].date}></Expenselist>
    <Expenselist name={expenses[2].name} location={expenses[2].location} amount={expenses[2].amount}  date={expenses[2].date}></Expenselist>
    </div>
   
  )
}

export default App;
