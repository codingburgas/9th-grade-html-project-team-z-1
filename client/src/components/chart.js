import { observer } from "mobx-react-lite";
import React from "react";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip,
    Legend,
    Title
}from "chart.js";
import {Pie} from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
const data = {
    labels: [
        "Fires",
       " Rescues",
       " CarCrashes"
    ], 
    datasets: [{
        label: "Accidents number", 
        data:[15, 20, 30],
        backgroundColor: [ 
            "#ffbb00",
            "#0877ff",
            "#ff051e"
        ],
        borderColor: "#000000",
        borderWidth: 2
    }]
    
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "right"
        },
        title:{
            display: true,
            "text":"title",
            font: {
                size: 15
            }
        }
    }
}
export const Chart = observer(( ) => 
{
    return (
        <div className="chart">
      <Pie className="pie" data = {data} options = {options}/>
      </div>
    )
})