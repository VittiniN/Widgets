import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Topcatergories } from "../Entities /widgetDataUtils";
import { interestformssubmitted } from "../Entities /widgetDataUtils";
import ActiveVsPostedButton from "../Components/selectmenu /MonthsPerMatter";

interface LineChartGraphProps {
  data: {}[];
  title: string;
 
}

const LineChartGraph: React.FC<LineChartGraphProps> = ({
  data,
  title,
}) => {
  return (
    <div className="card-custom">
      <div className="card_title"> {title}</div>

      <div className="line_chart_container">
      <LineChart width={400} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="name"
    tick={{ fontWeight: "bold", fontSize: "14px", fill: "black" }}
  />
  <YAxis tick={{ fill: "black" }} />
  <Line type="monotone" dataKey="dataKey1" stroke="#8884d8" />
  <Line type="monotone" dataKey="dataKey2" stroke="#82ca9d" />
  {/* Add more Line components as needed */}
</LineChart>
      </div>
    </div>
  );
};

export default LineChartGraph;
