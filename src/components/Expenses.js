import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className="expenses">
            {expenses.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                        location={expense.location}
                    />
                )
            })}
        </div>
    );
}

export default Expenses;