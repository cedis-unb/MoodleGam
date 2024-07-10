import { Radar } from "react-chartjs-2"
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarGraph(props){


    const data = {
        labels: props.miniature === true ?
          [ 
            '1',
            '3',
            '5',
            '7',
            '8',
            '6',
            '4',
            '2'

          ]  
        :[
            'Significado Épico & Chamado', 
            'Empoderamento da Criatividade & Feedback',
            'Influência Social & Pertencimento', 
            'Imprevisibilidade & Curiosidade',
            'Perda & Rejeição',
            'Escassez & Impaciência',
            'Propriedade & Posse',
            'Desenvolvimento & Realização'
            
        ],
        datasets: [
          {
            label: "Quantidade de técnicas",
            data: props.techniqueQuantitys,
            fill: true,
            backgroundColor: 'rgb(253, 126, 20, 0.6)',
            borderColor: 'rgb(253, 126, 20)',
            pointBackgroundColor: 'rgb(253, 126, 20)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(253, 126, 20)',
          },
        ],
      };

      const descriptions = {
        '1': 'Significado Épico & Chamado',
        '3': 'Empoderamento da Criatividade & Feedback',
        '5': 'Influência Social & Pertencimento',
        '7': 'Imprevisibilidade & Curiosidade',
        '8': 'Perda & Rejeição',
        '6': 'Escassez & Impaciência',
        '4': 'Propriedade & Posse',
        '2': 'Desenvolvimento & Realização'
      };
    
      const options = {
        
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: false
            },
            grid: {
                color: 'rgba(255, 255, 255)', // Color of the grid lines
            },
            pointLabels: {
                color: 'rgba(255, 255, 255)', // Color of the labels around the edge
                font: {
                  size: 14, // Size of the labels
                  family: 'Lato', // Font family of the labels
                },
            },
            ticks: {
                backdropColor: 'rgba(255, 255, 255, 0)', // Background color of the ticks (transparent)
                color: '#fff'
            },
            suggestedMin: 0,
            
          },
          
        },

        plugins: {
          tooltip: {
            callbacks: {
              title: function (tooltipItems) {
                // Map the tooltip title to the full description
                const tooltipItem = tooltipItems[0];
                return descriptions[tooltipItem.label];
              },
            },
          },

          legend: {
            display: false, // Hide the legend
          },
        },

        
      };
    
      return <Radar data={data} options={options} />
}