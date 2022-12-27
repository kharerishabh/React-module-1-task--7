import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
// import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      location: "Resturant",
      amount: 100,
      date: new Date(2022, 9, 12),
    },
    {
      id: "e2",
      title: "Petrol",
      location: "Pump",
      amount: 100,
      date: new Date(2022, 10, 10),
    },
    {
      id: "e3",
      title: "Movies",
      location: "Mall",
      amount: 1000,
      date: new Date(2022, 11, 9),
    },
    {
      id: "e4",
      title: "Dinner",
      location: "Hotel",
      amount: 2000,
      date: new Date(2022, 12, 9),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Card className='all-items'>{expenses.map((data) => {
        return <ExpenseItem
          key={data.id}
          title={data.title}
          location={data.location}
          amount={data.amount}
          date={data.date}
  
        ></ExpenseItem>;
      })}
      </Card>
    </div>
  );
}
export default App;
