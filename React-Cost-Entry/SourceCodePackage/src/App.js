import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let expenses = [
    {
      id: 1001,
      title: "Car Insurance",
      amount: 297.87,
      date: new Date(2021, 2, 28),
    },
    {
      id: 1002,
      title: "Toilet Paper",
      amount: 50.0,
      date: new Date(2012, 7, 18),
    },
    {
      id: 1003,
      title: "Cosmetics",
      amount: 150.75,
      date: new Date(2021, 5, 12),
    },
    { id: 1004, title: "TV", amount: 13000, date: new Date(2021, 9, 10) },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
        <Expenses expenseList={expenses}/>
      </header>
    </div>
  );
}

export default App;
