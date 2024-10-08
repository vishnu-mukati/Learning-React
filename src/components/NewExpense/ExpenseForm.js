import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredtitle, setenteredTitle] = useState('');
    const [enteredamount, setenteredAmount] = useState('');
    const [entereddate, setenteredDate] = useState('');
    const [enteredlocation, setenteredLocation] = useState('');
    const [showform, setshowForm] = useState(false);


    const titleChangeHandler = (event) => {

        setenteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {

        setenteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {

        setenteredDate(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setenteredLocation(event.target.value);
    }

    const showformhandler = () => {
        setshowForm(true);
    }

    const cancelFormHandler = () =>{
        setshowForm(false);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate),
            location: enteredlocation,
        }
        props.onSaveExpenseData(ExpenseData);
        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");
        setenteredLocation("");
        setshowForm(false);
    }

    return (
            <div>
            |{showform ?
                <form onSubmit={formSubmitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="title">Title</label>
                            <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" value={enteredamount} onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="date">Date</label>
                            <input type="date" value={entereddate} onChange={dateChangeHandler} min="2023-01-01" max="2026-12-31" />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="location">Location</label>
                            <input type="text" value={enteredlocation} onChange={locationChangeHandler} />
                        </div>
                        <div className="new-expense__actions">
                            <button type="calcel" onClick = {cancelFormHandler}>Cancle</button>
                            <button type="submit">Add Expense</button>
                        </div>
                    </div>
                </form>
            : <button type="button" onClick = {showformhandler}>Add Expense</button>}
            </div>
        );
}

export default ExpenseForm;