
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    return (<Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail title={props.title}amount={props.amount}location={props.location}></ExpenseDetail>
        </Card>);
}

export default ExpenseItem;