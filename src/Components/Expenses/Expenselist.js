import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import './Expenselist.css';
import Card from '../UI/Card';

const Expenselist=(props)=>{
  
    return (
        <Card className='expense-Item'>
          <ExpenseDate date={props.date} />
         
            <div className='expense-Item_description'>
            <ExpenseDetails location={props.location} name={props.name} amount={props.amount}  />
            </div>
        
               
           
        </Card>
    )
}
export default Expenselist