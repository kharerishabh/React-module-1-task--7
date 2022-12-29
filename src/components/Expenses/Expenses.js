import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => {
          return (<ExpenseItem
            key={expense.id}
            title={expense.title}
            location={expense.location}
            date={expense.date}
            amount={expense.amount}
          />);
        })}
      </Card>
    </div>
  );
};

export default Expenses;
