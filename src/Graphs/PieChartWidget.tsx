import React from "react";
import { Card } from "react-bootstrap";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { pieChartData } from "../Entities /widgetDataUtils";
import { renderCustomizedLabel } from "../Entities /widgetDataUtils";
import MattersPerCounty from "../Components/selectmenu /MattersPerCounty";

const COLORS = ["#3e8914 ", "#256eff", "#016669 ", "#00242f"];

const PieChartWidget: React.FC = () => {
  return (
    <Card className="card-custom">
      <Card.Body>
        <MattersPerCounty />
        <div className="card_title">
          <Card.Title> Active Matters Per County</Card.Title>
        </div>
        <PieChart width={400} height={250}>
          <Pie
            cx={200}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            data={pieChartData}
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend className="custom-legend" />
        </PieChart>
      </Card.Body>
    </Card>
  );
};

export default PieChartWidget;
