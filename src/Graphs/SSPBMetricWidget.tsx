import React from "react";

type MetricCardProps = {
  value?: number;
  metriccopy?: string;
};

const SSPBMetricWidget: React.FC<MetricCardProps> = ({ value, metriccopy }) => {
  return (
    <div className="SSPBMetricWidget">
      <div className="SSPBMetricCopy">{metriccopy}</div>

      <div className="SSPBMetricValue">{value}</div>
    </div>
  );
};

export default SSPBMetricWidget;
