import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  const chartDataPoints = props.dataPoints.map(dataPoint => dataPoint.value)
  const maxChartData = Math.max(...chartDataPoints)
  console.log(maxChartData)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxChartData}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
