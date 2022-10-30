import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const GraphicsBar = ({charData}) => {
  return (
    <div>
      <Line data={charData}/>
    </div>
  )
};

export default GraphicsBar;