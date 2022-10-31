import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import "./graphicsLine.css";

const GraphicsBar = ({charData}) => {
  return (
    <div className='graphics-line'>
      <Line width={800} height={400} data={charData}/>
    </div>
  )
};

export default GraphicsBar;
