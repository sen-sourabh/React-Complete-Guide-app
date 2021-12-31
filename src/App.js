import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expenses/Expense";

const App = () => {
  const expenseArray = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.45,
      date: new Date(2021, 2, 20),
    },
    {
      id: "e2",
      title: "Home Insurance",
      amount: 56.12,
      date: new Date(2021, 3, 22),
    },
    {
      id: "e3",
      title: "Office Insurance",
      amount: 123.34,
      date: new Date(2021, 4, 25),
    },
    {
      id: "e4",
      title: "Bike Insurance",
      amount: 450.0,
      date: new Date(2021, 5, 15),
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="react-container">
        <Expense items={expenseArray} />
      </div>
    </div>
  );
};

export default App;
