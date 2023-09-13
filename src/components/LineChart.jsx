"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";

const LineChart = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("line-chart"));

    console.log(chart);
    const option = {
        
      title: {
        text: "What is the most used Payment Gateway? ",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",

          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
            type: "line",
  
            data: [
              2.4, 5.1, 9.0, 22.4, 21.7, 73.7, 115.6, 152.2, 38.7, 28.8, 6.0, 1.3,
            ],
          },
        {
          type: "line",

          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
            0.7,
          ],
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="line-chart" className="md:block hidden" style={{ width: "600px", height: "400px" }}></div>
  );
};

export default LineChart;
