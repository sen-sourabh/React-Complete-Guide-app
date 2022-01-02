import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [addClicked, setAddExpenseOpenModal] = useState(false);
  const addExpenseOpenModal = () => {
    setAddExpenseOpenModal(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setAddExpenseOpenModal(false);
  };
  return (
    <div>
      {!addClicked ? (
        <button
          type="button"
          onClick={addExpenseOpenModal}
          className="new-expense-add-expense"
        >
          Add Expense
        </button>
      ) : (
        <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
