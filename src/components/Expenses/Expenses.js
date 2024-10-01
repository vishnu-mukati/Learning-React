import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filteredYear, setfilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const filteredExpensese = props.expenses.filter((expenses) => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })

    let expensescontent = <p>Expenses are not found</p>
    if(filteredExpensese.length > 0){
        expensescontent =  filteredExpensese.map((expense, index) => {
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
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangefilter={changeFilterHandler} />
            {expensescontent}
            {filteredExpensese.length ===1 && <p>Only one expense here. Please add more</p>}
        </Card>
    );
}

export default Expenses;