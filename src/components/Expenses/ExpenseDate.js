import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const month = months[props.CalendarDate.getMonth()];
    const year = props.CalendarDate.getFullYear();
    const date = props.CalendarDate.getDate();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    );
}

export default ExpenseDate;