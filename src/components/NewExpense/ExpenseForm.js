import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [setIsOpened] = [props.setIsOpened];

  const addTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const addAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const addDateHandler = (e) => {
    setDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" && amount === "" && date === "") {
      return;
    }
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const closeNewExpensesFormHandler = () => {
    setIsOpened(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={addTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={addAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-.01"
            max="2022-12-31"
            value={date}
            onChange={addDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={closeNewExpensesFormHandler}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
