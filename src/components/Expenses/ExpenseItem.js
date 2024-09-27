import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseITem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, settitle] = useState(props.title);

    const buttonClickHandler = (event) => {
        settitle('new title');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate CalendarDate={props.date} />
            <div className="expense-item__location">
                <h2>{props.location}</h2>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={buttonClickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;