import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const DUMMY_EXPENSES = [
    { id: '1', date: new Date(2023, 11, 5), title: 'insurance', amount: '500', location: 'Delhi' },
    { id: '2', date: new Date(2024, 8, 29), title: 'laptop', amount: '400', location: 'indore' },
    { id: '3', date: new Date(2025, 7, 7), title: 'pen', amount: '50', location: 'dewas' },
    { id: '4', date: new Date(2023, 3, 14), title: 'mobile', amount: '740', location: 'ujjain' },
    { id: '5', date: new Date(2025, 5, 23), title: 'car', amount: '750', location: 'mumbai' },
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const passExpenseDataHandler = (passNewExpenseData) => {
    setExpenses((prevState) => {
      return (
        [passNewExpenseData, ...prevState]
      );
    });
  }

  return (
    <div>
      <NewExpense onPassExpenseData={passExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;
