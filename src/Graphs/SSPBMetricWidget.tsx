import React from "react";
import { Card } from "react-bootstrap";
// import { FaCaretUp } from "react-icons/fa";
// import { FaCaretDown } from "react-icons/fa";
import Matter from "../Components/selectmenu/Matters";

type MetricCardProps = {
  value: number;
  metriccopy: string;
};

const SSPBMetricWidget: React.FC<MetricCardProps> = ({ value, metriccopy }) => {
  return (
    <div className="card-custom1">
      <div className="metric_title">{metriccopy}</div>

      <div className="metric-card__value">{value}</div>

      <div className="card-body-container"></div>
    </div>
  );
};

export default SSPBMetricWidget;
