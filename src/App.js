import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Food",
      location: "Resturant",
      amount: 100,
      date: new Date(2022, 12, 12),
    },
    {
      id: "e2",
      title: "Petrol",
      location: "Pump",
      amount: 100,
      date: new Date(2022, 12, 10),
    },
    {
      id: "e3",
      title: "Movies",
      location: "Mall",
      amount: 1000,
      date: new Date(2022, 12, 9),
    },
    {
      id: "e3",
      title: "Dinner",
      location: "Hotel",
      amount: 2000,
      date: new Date(2022, 12, 9),
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expense.map((data) => {
        return <ExpenseItem
          title={data.title}
          location={data.location}
          amount={data.amount}
          date={data.date}
        ></ExpenseItem>;
      })}
    </div>
  );
}

export default App;
