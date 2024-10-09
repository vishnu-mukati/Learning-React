import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {

    let fillheight = "0%";

    if (props.value > 0) {
        fillheight = Math.round((props.value / props.maxvalue) * 100) + '%';
    }
    console.log(fillheight)
    return (
    <div className="chart-bar">
    <div className="chart-bar__inner">
      <div className="chart-bar__fill" style={{ height: fillheight }}>{fillheight}</div>
    </div>
    <div className="chart-bar__label">{props.label}1</div>
  </div>
    );
}

export default ChartBar;