import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openNewExpensesFormHandler = () => {
    setIsOpened(true);
  };

  return (
    <div className="new-expense">
      {!isOpened && (
        <button onClick={openNewExpensesFormHandler}>Add New Expenses</button>
      )}
      {isOpened && (
        <ExpenseForm
          setIsOpened={setIsOpened}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
