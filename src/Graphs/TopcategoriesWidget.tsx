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
import { Card } from "react-bootstrap";
import { Topcatergories } from "../Entities /widgetDataUtils";
import { interestformssubmitted } from "../Entities /widgetDataUtils";
import ActiveVsPostedButton from "../Components/selectmenu /MonthsPerMatter";

interface LineChartGraphProps {
  data: { name: string; Jan: number; Feb: number; Mar: number }[];
  title: string;
}

const LineChartGraph: React.FC<LineChartGraphProps> = ({ data, title }) => {
  return (
    <div className="card-custom">
      <Card className="custom-card">
        <Card.Body>
          <ActiveVsPostedButton />
          <div className="card_title"> {title}</div>

          <div className="line_chart_container">
            <LineChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontWeight: "bold", fontSize: "14px", fill: "black" }}
              />
              <YAxis tick={{ fill: "black" }} />
              <Tooltip />
              <Legend
                iconSize={13}
                iconType="line"
                wrapperStyle={{ marginTop: "14px" }}
                payload={[
                  { value: "Jan", type: "line", color: "#DF6D04" },
                  { value: "Feb", type: "line", color: "#3E8914" },
                  { value: "Mar", type: "line", color: "#256EFF" },
                  // {value: "April", type: "line", color: "#182000"   },
                ]}
                formatter={(value, entry) => {
                  return <span className="Line-legend-item">{value}</span>;
                }}
              />

              <Line type="natural" dataKey="Jan" stroke="#256EFF" />
              <Line type="natural" dataKey="Feb" stroke="#3E8914" />
              <Line type="natural" dataKey="Mar" stroke="#DF6D04" />
            </LineChart>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LineChartGraph;
