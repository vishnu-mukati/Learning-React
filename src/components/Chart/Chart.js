import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const expenseonlyArray = props.chartExpenses.map((monthexpenseData) => {
        return monthexpenseData.amount;
    })

    const maxvalue = Math.max(...expenseonlyArray);
    const chartData = [
        { expenseMonth: "jan", expenseAmount: 0 },
        { expenseMonth: "feb", expenseAmount: 0 },
        { expenseMonth: "mar", expenseAmount: 0 },
        { expenseMonth: "apr", expenseAmount: 0 },
        { expenseMonth: "may", expenseAmount: 0 },
        { expenseMonth: "jun", expenseAmount: 0 },
        { expenseMonth: "jul", expenseAmount: 0 },
        { expenseMonth: "aug", expenseAmount: 0 },
        { expenseMonth: "sep", expenseAmount: 0 },
        { expenseMonth: "oct", expenseAmount: 0 },
        { expenseMonth: "nov", expenseAmount: 0 },
        { expenseMonth: "dec", expenseAmount: 0 },
    ]
   
    for(let expense of props.chartExpenses){
         chartData[expense.date.getMonth()].expenseAmount +=expense.amount
    }
    return (
        <div className="chart">
            {chartData.map((monthData) => {
                return <ChartBar
                    key={monthData.expenseMonth}
                    label={monthData.expenseMonth}
                    value={monthData.expenseAmount}
                    maxvalue={maxvalue}
                />
            })}
        </div>
    );
}

export default Chart;
