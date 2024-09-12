import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <ExpenseItem
        date={new Date(2023, 11, 5)}
        title="insurance"
        amount="50"
        location="Delhi"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        amount="20"
        location="Delhi"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        amount="5"
        location="Hyderabad"
      ></ExpenseItem>
      <ExpenseItem
        date={new Date(2023, 1, 14)}
        title="Laptop"
        amount="200"
        location="Mumbai"
      ></ExpenseItem>
    </div>
  );
}
export default App;
