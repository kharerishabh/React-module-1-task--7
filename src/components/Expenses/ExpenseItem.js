import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    const clickHandler = ()=>{
        console.log('Clicked!!')
    }
    const deleteHandler = ()=>{
        const element = document.getElementById("delete");
        //console.log(element)
        element.remove();
    }
    return (<div id='delete'>
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail title={props.title}amount={props.amount}location={props.location}></ExpenseDetail>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
        </div>);
}

export default ExpenseItem;