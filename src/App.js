import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
 import Expenses from "./components/Expenses/Expenses";

 const Dummy_Expenses = [
  {
    id: "e1",
    title: "Food",
    location: "Resturant",
    amount: 100,
    date: new Date(2021, 9, 12),
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
    date: new Date(2020, 11, 9),
  },
  {
    id: "e4",
    title: "Dinner",
    location: "Hotel",
    amount: 2000,
    date: new Date(2019, 11, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses)
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="all-items">
        <Expenses items={expenses}/>
      </Card>
    </div>
  );
};
export default App;
