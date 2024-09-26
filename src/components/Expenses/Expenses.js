import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
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
        </Card>
    );
}

export default Expenses;