import './ExpenseItem.css';

function ExpenseItem(){
const expenseDate = new Date(2022, 12, 12);
const expenseTitle = 'Food';
const expenseAmount = 100;
const locationOfExpenditure = 'Resturant'

    return (<div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}, {locationOfExpenditure}</h2>
        <div className='expense-item__price'>Rs {expenseAmount}</div>  
        </div>      
        </div>);
}

export default ExpenseItem;