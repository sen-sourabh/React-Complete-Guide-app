import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
    //2. setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //3. setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    //2. setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //3. setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
    //2. setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    //3. setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;