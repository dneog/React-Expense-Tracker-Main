import './ExpenseDetails.css'
import Expense from './Expenses';

const ExpenseDetails=(props)=>{
    // const location= props.location;
    const titles= props.name;
    const amount= props.amount;
    return(
        <div className="details">
            <div className="details2">
            {/* <div className="firstDetails">{location} </div> */}
            <div className="secondDetails">{titles}</div>
            </div>
            <div className="thirdDetails">${amount}</div>

          
        </div>
    )
}
export default ExpenseDetails;