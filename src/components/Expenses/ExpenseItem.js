import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import './ExpenseItem.css';

const ExpenseItem = (props) =>{

    const [amount, setAmount] = useState(props.amount);
    const priceHandler = ()=>{
        setAmount(1500)
    }

    const [title, setTitle] = useState(props.title);
    const clickHandler = ()=>{
        setTitle('Updated!')
        console.log(title)
    }
    
    const deleteHandler = ()=>{
        const element = document.getElementById("delete");
        //console.log(element)
        element.remove();
    }
    return (<div id='delete'>
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail title={title}amount={amount}location={props.location}></ExpenseDetail>
        <button onClick={priceHandler}>Change Price</button>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
        </div>);
}

export default ExpenseItem;