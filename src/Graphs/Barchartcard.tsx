import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  Legend,
  DefaultTooltipContent,
} from "recharts";
import { widgetDatas } from "../Entities /widgetDataUtils";

const ActiveVsMattersBarChart = () => {
  return (
    <div className="bar_chart_chart">
      <BarChart width={400} height={260} data={widgetDatas}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontWeight: "bold", fontSize: "14px", fill: "black" }}
        />

        <YAxis tick={{ fill: "black" }} />
        <DefaultTooltipContent />

        <Legend
          iconSize={13}
          iconType="line"
          wrapperStyle={{ marginTop: "14px" }}
          payload={[
            { value: "Jan", type: "line", color: "#330E47" },
            { value: "Feb", type: "line", color: "#011e56" },
            { value: "Mar", type: "line", color: "#182000" },
            // { value: 'April', type: 'line', color: '#182000' },
          ]}
          formatter={(value, entry) => {
            return <span className="Bar-Chart-legend-item">{value}</span>;
          }}
        />

        <Bar dataKey="ActiveMatters" fill="#DF6D04" />
        <Bar dataKey="PostedMatters" fill="#256eff" />
      </BarChart>
    </div>
  );
};

export default ActiveVsMattersBarChart;
