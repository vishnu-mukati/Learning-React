import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Expenses are not found</h2>
    }

    return (
        <ul>
            {props.items.map((item) => {
                return (
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                        location={item.location}
                    />
                );
            })}
        </ul>
    );
}

export default ExpenseList;
