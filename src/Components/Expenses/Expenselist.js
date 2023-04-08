import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import './Expenselist.css';
import Card from '../UI/Card';

const Expenselist=(props)=>{
    const clickHandler=(event)=>{
     event.target.parentElement.parentElement.remove()
    }
  
    return (
        <Card className='expense-Item'>
        <div className="expense-date">
          <ExpenseDate date={props.date} />
          </div>
           <div className="expense-details">
            <ExpenseDetails location={props.location} name={props.name} amount={props.amount}  />
           
            <button onClick={clickHandler}>Delete Expense</button>
        
            </div>
           
        </Card>
    )
}
export default Expenselist