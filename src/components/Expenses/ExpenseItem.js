import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseITem.css"
import Card from "../UI/Card";

const buttonClickHandler = (event) => {
    console.log('button clicked');
}

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate CalendarDate={props.date} />
            <div className="expense-item__location">
                <h2>{props.location}</h2>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={buttonClickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;