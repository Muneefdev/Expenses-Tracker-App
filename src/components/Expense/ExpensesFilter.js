import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectYearHandler = (e) => {
    const selectedYear = e.target.value;

    props.onSelectYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedValue} onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
