
import Expenselist from './Components/Expenselist';
const expenses= [
  {
  id: 'e1',
  LocationOfExpenditure: 'Location Of Expenditure',
  title: 'Car Insurence',
  date: new Date(2021, 3, 22),
  amount: 650
  },
  {
  id: 'e2',
  LocationOfExpenditure: 'Location Of Expenditure',
  title: 'Books',
  date:new Date(2021, 2, 28),
  amount: 550
  },
  {
  id: 'e3',
  LocationOfExpenditure: 'Location Of Expenditure',
  title: 'Headphones',
  date: new Date(2021, 4, 18),
  amount: 780
  },
]

function App() {
  return (
    <div>
    <Expenselist name={expenses[0].title} amount={expenses[0].amount} LocationOfExpenditure= {expenses[0].LocationOfExpenditure} date={expenses[0].date}></Expenselist>
    <Expenselist name={expenses[1].title} amount={expenses[1].amount} LocationOfExpenditure= {expenses[1].LocationOfExpenditure} date={expenses[1].date}></Expenselist>
    <Expenselist name={expenses[2].title} amount={expenses[2].amount} LocationOfExpenditure= {expenses[2].LocationOfExpenditure} date={expenses[2].date}></Expenselist>
    </div>
   
  );
}

export default App;
