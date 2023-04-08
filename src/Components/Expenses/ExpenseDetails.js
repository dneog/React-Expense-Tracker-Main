import './ExpenseDetails.css'


const ExpenseDetails=(props)=>{
    const location= props.location;
    const titles= props.name;
    const amounts= props.amount;
    return(
        <div className="details">
            <div className="details2">
            <div className="firstDetails">{location} :</div>
            <div className="secondDetails">{titles}</div>
            </div>
            <div className="thirdDetails">$ {amounts}</div>

          
        </div>
    )
}
export default ExpenseDetails;