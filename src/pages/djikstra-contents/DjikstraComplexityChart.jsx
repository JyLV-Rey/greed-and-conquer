import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LogarithmicScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// 
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  LogarithmicScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

// Utility to generate function data
const generateData = (func, xMin, xMax, step = 1) => {
  const data = [];
  for (let x = xMin; x <= xMax; x += step) {
    const y = func(x);
    if (y > 0 && isFinite(y)) {
      data.push({ x: x, y: y });
    }
  }
  return data;
};

const min = 1;
const max = 100;

// fucnksitions
const f1 = x => Math.pow(2, x);
const f2 = x => (x + ((x * (x - 1)) / 2)) * Math.log2(x);

// Generate datasets
const data = {
  datasets: [
    {
      label: 'y = 2^x',
      data: generateData(f1, min, max, 0.5),
      borderColor: 'blue',
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
    {
      label: 'y = (v + e) log₂ v',
      data: generateData(f2, min, max, 0.5),
      borderColor: 'red',
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Dijkstra Time Complexity Comparison',
      color: '#111',
      font: {
        size: 20,
      }
    },
    legend: {
      labels: {
        color: '#222',
        font: {
          size: 14,
        }
      }
    }
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'x (vertices)',
        color: '#2G2G2G',
        font: {
          size: 16
        }
      },
      ticks: {
        color: '#444'
      }
    },
    y: {
      type: 'logarithmic',
      min: 1,
      title: {
        display: true,
        text: 'y (log scale)',
        color: '#2G2G2G',
        font: {
          size: 16
        }
      }
    }
  }
};

export default function FunctionGraph() {
  return <Line data={data} options={options} />;
}
