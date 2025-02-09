import React from 'react'
import {Chart as ChartJS, defaults} from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import revData from "../data/revenueData.json";


defaults.responsive= true;

const chart = () => {
  return (
    <div className="charts">
        <h2>Chart JS Project</h2>
        <div className="row row1">
            <h3>Line Chart</h3>
            <Line
            data={{
                labels: revData.map((data) => data.label),
                datasets : [{
                    label: "Revenue",
                    data: revData.map((data)=> data.revenue),
                    backgroundColor: "rgb(93, 18, 255)",
                    borderColor: "rgb(170, 149, 255)",
                },
                {
                    label: "Cost",
                    data: revData.map((data)=> data.cost),
                    backgroundColor: "rgb(255, 141, 11)",
                    borderColor: "rgb(252, 191, 120)",
                },
            ],
            }}
            
            
            
            />

        </div>
        <div className="row row2">
            
                <div className="chart three">
                    <h3>bar chart</h3>
                <Bar 
                    data = {{
                        labels: sourceData.map((data)=>data.label)
                        ,
                        datasets: [
                            {
                                label: "Count",
                                data : sourceData.map((data)=>data.count),
                                backgroundColor:[
                                    "rgb(255, 201, 139)"
                                ],
                                borderRadius: 3
                            },
                            {
                                label: "Total",
                                data : sourceData.map((data)=>data.total),
                                backgroundColor:[
                                    "rgb(191, 176, 252)",
                                    "rgb(170, 230, 255)",
                                    "rgb(255, 156, 179)"
                                ],
                                borderRadius: 3
                            },
                            {
                                label: "Total",
                                data : sourceData.map((data)=>data.extras),
                                backgroundColor:[
                                    "rgb(206, 252, 176)",
                                    "rgb(255, 238, 170)",
                                    "rgb(255, 156, 156)"
                                ],
                                borderRadius: 3
                            }
                        ]
                    }}
                />
                

                </div>
                <div className="chart two">
                    <h3>Doughnut Chart</h3>
                <Doughnut 
                    data = {{
                        labels: sourceData.map((data)=>data.label)
                        ,
                        datasets: [
                            {
                                label: "Count",
                                data : sourceData.map((data)=>data.count),
                                backgroundColor:[
                                    "rgb(209, 130, 255)",
                                    "rgb(170, 230, 255)",
                                    "rgb(255, 156, 179)"
                                ],
                                borderRadius: 3,
                                weight:10
                            }
                        ]
                    }}
                />
                </div>
        </div>

        
        
    </div>
  )
}

export default chart