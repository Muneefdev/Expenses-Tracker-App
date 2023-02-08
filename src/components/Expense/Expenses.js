import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses] = [props.data];

  const internedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onSelectYear={internedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
