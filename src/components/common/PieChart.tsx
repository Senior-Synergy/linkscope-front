"use client";

import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }: { chartData: any }) {
  return (
    <div className="">
      <Pie
        data={chartData}
      />
    </div>
  );
}
export default PieChart;
