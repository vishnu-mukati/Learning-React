import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredtitle, setenteredTitle] = useState('');
    const [enteredamount, setenteredAmount] = useState('');
    const [entereddate, setenteredDate] = useState('');


    const titleChangeHandler = (event) => {

        setenteredTitle(event.target.value);
    }

    const amountChangeHandler =(event) =>{

        setenteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{

        setenteredDate(event.target.value);
        }

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const ExpenseData = {
             title : enteredtitle,
             amount: enteredamount,
             date : new Date(entereddate),
        }
        console.log(ExpenseData);
        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");
    }    

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={enteredamount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" value={entereddate} onChange={dateChangeHandler} min="2023-01-01" max="2024-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;