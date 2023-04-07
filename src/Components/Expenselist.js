import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import './Expenselist.css';

function Expenselist(props){
  
    return (
        <div className='expense-Item'>
          <ExpenseDate date={props.date} />
         
            <div className='expense-Item_description'>
            <ExpenseDetails location={props.location} name={props.name} amount={props.amount}  />
            </div>
        
               
           
        </div>
    )
}
export default Expenselist