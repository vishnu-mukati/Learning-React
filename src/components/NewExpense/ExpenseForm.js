import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    // this is multiple states

    // const [enteredtitle, setenteredTitle] = useState('');
    // const [enteredamount, setenteredAmount] = useState('');
    // const [entereddate, setenteredDate] = useState('');

    // this is the single state example
    const [userInput,setUserInput] = useState({
        enteredtitle : "",
        enteredamount : "",
        entereddate : "",
    })

    const titleChangeHandler = (event) => {

        // this is the multiple state example
        // setenteredTitle(event.target.value);

        // this is the exaple of single state
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredtitle : event.terget.value,
            }
        })

    }

    const amountChangeHandler =(event) =>{

        // this is the multiple state example
        // setenteredAmount(event.target.value);

         // this is the exaple of single state
         setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredamount : event.terget.value,
            }
        })
    }

    const dateChangeHandler = (event) =>{

        // this is the mmultiple state example
        // setenteredDate(event.target.value);

         // this is the exaple of single state
         setUserInput((prevState)=>{
            return {
                ...prevState,
                entereddate : event.terget.value,
            }
        })
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" onChange={dateChangeHandler} min="2023-01-01" max="2024-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;