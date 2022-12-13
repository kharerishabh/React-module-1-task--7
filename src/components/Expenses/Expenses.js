import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        location={props.items[0].location}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        location={props.items[1].location}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        location={props.items[2].location}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        location={props.items[3].location}
        date={props.items[3].date}
        amount={props.items[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;