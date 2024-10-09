import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expenses) => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangefilter={changeFilterHandler}
            />
            <ExpenseChart chartData = {filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;