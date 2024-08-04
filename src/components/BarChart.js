import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import {DataForChart} from '../functions/DataForChart.js'
import { ColorsForChart } from '../functions/ColorsForChart.js';
import Colors from '../scss/_variables.scss'




const BarChart = () => {
return (
    <Bar
        data = {{
        labels: DataForChart('day'),
        datasets: [{
            barThickness: '40',
            hoverBackgroundColor: Colors.cream,
            data: DataForChart('amount'),
            borderWidth: 0,
            backgroundColor: ColorsForChart(Colors.softRed, Colors.cyan),
            borderRadius: 5,
        }]
        }}
        options = {{
            plugins:{
                legend: {
                    display: false,
            },
                tooltip: {
                    display: true,
                    displayColors: false,
                    callbacks: {
                label: (item) =>
                    `$${item.formattedValue}`,
            },
                }
        },
            scales: {
                y: {
                    display: false,
                    grid:{
                        display:false
                    },
                },
                x: {
                    ticks: {
                        color: Colors.mediumBrown
                    },
                    grid:{
                        display:false
                    }
                  }
              }
            }
        }
    />

)
}

export default BarChart