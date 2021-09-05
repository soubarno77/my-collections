import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (prop) => {
  /* Below commented lines are the multi-state handler concept */

  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const formDataHandler = (event) => {
    event.preventDefault(); // wont let server request to happen
    prop.onSaveExpData(enteredExpData);
    setExpData({
      id: "",
      title: "",
      amount: "",
      date: "",
    });
  };

  /* Below de-structuring depicts the one-state handler by passing object in the useState */

  const [enteredExpData, setExpData] = useState({
    id: "",
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setExpData((prevState) => {
      return {
        ...prevState,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      };
    });

    setExpData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setExpData((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setExpData((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };

  return (
    <form onSubmit={formDataHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredExpData.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredExpData.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={prop.onCancel}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
