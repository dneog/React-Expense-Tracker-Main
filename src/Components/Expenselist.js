import './Expenselist.css';

function Expenselist(props){
    return (
        <div className='expense-Item'>
          <div>{props.date.toISOString()}</div>
            <div className='expense-Item_description'>
            {props.LocationOfExpenditure} : {props.title}
            </div>
          <div className='expense-Item_price'>${props.amount}</div>
               
           
        </div>
    )
}
export default Expenselist