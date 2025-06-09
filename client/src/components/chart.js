import { observer } from "mobx-react-lite";
import "./styles/chart.css" 
import {fetchAccidents, fetchTypes} from "../http/accidentAPI";
import React, {useEffect, useState } from "react";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip,
    Legend,
    Title
} from "chart.js";
import {Pie} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const Chart = observer(( ) => 
    {
        const[chartData, setChartData] = useState(null)

        useEffect(() => {

        fetchTypes().then(types => {
            const promises = types.map(type =>
                fetchAccidents({ type: type.id, countOnly: 1 }).then(res => ({
                    label: type.name,
                    count: res
                }))
            );

      Promise.all(promises).then(results => {
        const labels = results.map(item => item.label);
        const data = results.map(item => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Accidents quantity",
              data,
              backgroundColor: [
                "#ffbb00",
                "#0877ff",
                "#ff051e",
                "#36A2EB",
                "#9966FF",
                "#4BC0C0"
              ],
              borderColor: "#000000",
              borderWidth: 2
            }
          ]
        });
      });
    });
  }, []);
        const options = {
            responsive: false,
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
        if (!chartData) {return <p>Getting diagram data....</p>;}

        return (
   <div className="chart">
      <Pie  data = {chartData} options = {options}  width={700} height={700} />
    </div>
    )
})