
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import './ExpenseItem.css';

function ExpenseItem(props){
    return (<div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail title={props.title}amount={props.amount}location={props.location}></ExpenseDetail>
        </div>);
}

export default ExpenseItem;