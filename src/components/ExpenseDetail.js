import './ExpenseItem.css'

function ExpenseDetail(props){
return  (<div className='expense-item'>
        <div className='expense-item__description'>
        <h2>{props.title}, {props.location}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>  
        </div>
        </div>);
}

export default ExpenseDetail