import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No Expense Found</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                location={expense.location}
                date={expense.date}
                amount={expense.amount}
              />
            );
          })
        )}
        {filteredExpenses.length===1 && <p>Only Single Expense here</p>}
      </Card>
    </div>
  );
};

export default Expenses;
