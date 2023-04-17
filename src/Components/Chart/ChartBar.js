import React from "react";
import './ChartBar.css'

const ChartBar =( props) => {
    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight= Math.round((props.value/props.maxValue)*100) + '%';
    }
    
    
    return <div className="ChartBar">
    <div className="ChartBar_inner">
        <div className="ChartBar_fill" style={{height: barFillHeight}}>

        </div>

    </div>
    <div className="ChartBar_label">{props.label}</div>
    </div>
}

export default ChartBar;