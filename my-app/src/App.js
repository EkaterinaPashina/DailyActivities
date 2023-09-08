import './App.css';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

import {
  Pie
} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
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

  }],
}

const options = {
  plugins: {
    title: {
      display: true,
      text: 'MY DAILY ACTIVITIES',
      position: 'top',
      fontSize: 20,
      fontColor: '#555',
      padding: 20
    },
  },
};


function App() {
  return ( <
    Pie data = {
      data
    }
    options = {
      options
    }
    />);
  }

  export default App;