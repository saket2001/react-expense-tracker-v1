import { useState } from "react";
import Form from "./Form";

const ExpenseForm = (props) => {
  const [flag, setFlag] = useState("false");
  const getDataFromChild = (data) => {
    // add custom id to data
    data.id = (Math.random() * 10).toString();
    // sending to app component
    props.onDataArrival(data);
  };

  const showForm = (e) => {
    setFlag(true);
  };
  const hideForm = (e) => {
    setFlag(false);
  };

  return (
    <div className="expense_form">
      {flag === true ? (
        <Form onDataArrival={getDataFromChild} onCancelClick={hideForm} />
      ) : (
        <div className="form__div_action">
          <button className="btn" onClick={showForm}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;
