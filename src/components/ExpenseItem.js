import "./ExpenseITem.css"

function ExpenseItem(){
    const expenseDate = new Date(2023,1,14).toISOString();
    const expenseTitle = "insurance"
    const expenseAmount = 50;
    const expenseLocation = "Delhi"
    return (
        <div className ="expense-item">
            <div>
                <div>{expenseDate}</div>
            </div>
            <div className = "expense-item__location">
                <h2>{expenseLocation}</h2>
            </div>
            <div className ="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className ="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;