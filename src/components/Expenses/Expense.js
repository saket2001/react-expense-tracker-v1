import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import FilterDiv from "../Filter/FilterDiv";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import "./Expense.css";

const Expense = (props) => {
  const [inputFilterYear, setFilterYear] = useState("2022");

  const getFilterYear = (data) => {
    setFilterYear(data);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === inputFilterYear
  );

  let expenseContent = <p>No expenses for selected year</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div className="expense_item_container">
      <FilterDiv selected={inputFilterYear} onFilterChange={getFilterYear} />
      <ExpenseChart expenses={filteredExpenses} />
      <h3>Your Expenses</h3>

      {/* rendering array of data */}
      {expenseContent}
    </div>
  );
};

export default Expense;
