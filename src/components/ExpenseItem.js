import "./ExpenseITem.css"

function ExpenseItem(props){
    return (
        <div className ="expense-item">
            <div>
                <div>{props.date.toISOString()}</div>
            </div>
            <div className = "expense-item__location">
                <h2>{props.location}</h2>
            </div>
            <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className ="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;