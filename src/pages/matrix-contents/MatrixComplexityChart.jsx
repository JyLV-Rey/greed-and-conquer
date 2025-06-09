import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

// Utility to generate function data
const generateData = (func, xMin, xMax, step = 0.01) => {
  const data = [];
  for (let x = xMin; x <= xMax; x += step) {
    data.push({ x: x, y: func(x) });
  }
  return data;
};

const min = 0;
const max = 100;

// Define both functions
const f1 = x => Math.pow(x, 3);
const f2 = x => Math.pow(x, 2.81);

// Generate datasets
const data = {
  datasets: [
    {
      label: 'y = x^3',
      data: generateData(f1, min, max, 0.05),
      borderColor: 'blue',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'y = x^2.81',
      data: generateData(f2, min, max, 0.05),
      borderColor: 'red',
      fill: false,
      tension: 0.1,
    }
  ]
};

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'x',
        color: '#2G2G2G'
      }
    },
    y: {
      title: {
        display: true,
        text: 'y',
        color: '#2G2G2G'
      }
    }
  }
};

export default function FunctionGraph() {
  return <Line data={data} options={options} />;
}
