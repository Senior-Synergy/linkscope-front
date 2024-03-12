"use client";

import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);

interface ResultChartProps {
  phishCount: number;
  safeCount: number;
}

function ResultChart({ phishCount, safeCount }: ResultChartProps) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const data = {
      labels: ["phishing", "safe"],
      datasets: [
        {
          data: [phishCount, safeCount],
          backgroundColor: ["#f87171", "#4ade80"],
          hoverOffset: 4,
        },
      ],
    };

    setChartData(data);
  }, [phishCount, safeCount]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleClickToItem = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {chartData ? (
        <Doughnut data={chartData} options={options} />
      ) : (
        <>
          <p>Chart data not available</p>
        </>
      )}
    </>
  );
}

export default ResultChart;
