import { observer } from "mobx-react-lite";
import "./styles/chart.css" 
import {fetchAccidents, fetchTypes} from "../http/accidentAPI";
import React, { useContext, useEffect, useState } from "react";
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip,
    Legend,
    Title
}from "chart.js";
import {Pie} from "react-chartjs-2";
import { Context } from "../index";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
export const Chart = observer(( ) => 
    {
        const {accident} = useContext(Context)
        const[data, setData] = useState()
          useEffect(() =>{
            let types= [];
            fetchTypes().then(res => res.json()).then(data=> {
                const labels = data.map(item => console.log(item.name))
                setData( {
               labels, 
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
                
            }) 
            } )
           console.log(data)

          
            
        }, [])
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
       
        return (
   <div className="chart">
      <Pie  data = {data} options = {options}  width={700} height={700} />
    </div>
    )
})