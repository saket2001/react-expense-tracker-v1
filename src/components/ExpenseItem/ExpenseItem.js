import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="ExpenseItem">
      <div className="expense_item__info">
        <div className="expense_item__title">{props.title}</div>
        <div className="expense_item__date">
          {month} {day} {year}
        </div>
      </div>
      <div className="expense_item__amount">₹ {props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
