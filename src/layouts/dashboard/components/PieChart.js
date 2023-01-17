import React from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

// eslint-disable-next-line react/prop-types
function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default PieChart;
