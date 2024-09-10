import "./ExpenseITem.css"

function ExpenseItem(){
    return (
        <div className ="expense-item">
            <div>
                <div>15 August 2023</div>
            </div>
            <div className ="expense-item__description">
                <h2>Book</h2>
                <div className ="expense-item__price">$10</div>
            </div>
            <div className = "expense-item__location">
                <h2>Delhi</h2>
            </div>
        </div>
    );
}

export default ExpenseItem;