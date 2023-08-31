import './App.css';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import {
  Pie
} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: [
    'Work',
    'Eat',
    'Commute',
    'Watch TV',
    'Sleep',
  ],
  datasets: [{
    label: 'Percent per day',
    data: [45.8, 8.3, 8.3, 8.3, 29.2],
    backgroundColor: [
      'rgb(68, 104, 201)',
      'rgb(206, 63, 29)',
      'rgb(242, 154, 31)',
      'rgb(61, 148, 33)',
      'rgb(143, 27, 150)',
    ],
    hoverOffset: 4

  }]
};


function App() {
  return ( < Pie data = {
      data
    }
    />);
  }


  export default App;