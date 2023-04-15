import React from 'react';
import './ExpenseFilter.css';
import Card from '../UI/Card';
 
const ExpenseFilter = (props)=> {
    const dropdownChangeHandler= (event) => {
        props.onChangeFilter(event.target.value);
    }
    return(
        <Card className='filter'>
            <div className='filter2'>
                <label  htmlFor="" onChange={dropdownChangeHandler}>Filter By Year</label>
               </div>
              <div className='filter3'> 
                <select  value={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
                </div> 
            
        </Card>
    )
}
export default ExpenseFilter