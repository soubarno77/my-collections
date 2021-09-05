import React, { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";
import Card from "../GenericUI/Card";
import ExpensesFilter from "./FilterExpenses/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filteredExpenseDateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenseList.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectExpenseDate={filteredExpenseDateHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
