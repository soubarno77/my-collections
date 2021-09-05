import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let initial_expenses = [];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses)

  const addExpenseDataHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddNewExp = {addExpenseDataHandler}/>
        <Expenses expenseList={expenses}/>
      </header>
    </div>
  );
}

export default App;
