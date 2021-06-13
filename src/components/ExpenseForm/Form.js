import "./ExpenseForm.css";
import { useState } from "react";

const Form = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const inputTitleHandler = (e) => {
    if (e.target.value) setTitle(e.target.value);
  };
  const inputNumberHandler = (e) => {
    if (e.target.value) setAmount(e.target.value);
  };
  const inputDateHandler = (e) => {
    if (e.target.value) setDate(e.target.value);
  };

  const GetFormData = (e) => {
    e.preventDefault();

    // check if all input data is entered
    if (enteredTitle && enteredAmount && enteredDate) {
      // making expense obj
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      // sending data to parent
      props.onDataArrival(expenseData);
    } else alert("Please provide all the information asked!!");
    // clearing inputs
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="expense_form" onSubmit={GetFormData}>
      <div className="form__div">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          name=""
          id="title"
          autoComplete="off"
          value={enteredTitle}
          onChange={inputTitleHandler}
        />
      </div>
      <div className="form__div">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input
          type="number"
          min="0"
          id="amount"
          value={enteredAmount}
          onChange={inputNumberHandler}
        />
      </div>
      <div className="form__div">
        <label htmlFor="date" className="label">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={enteredDate}
          onChange={inputDateHandler}
        />
      </div>
      <div className="form__div_action">
        <button className="btn">Add Expense</button>
        <button className="btn" onClick={props.onCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
