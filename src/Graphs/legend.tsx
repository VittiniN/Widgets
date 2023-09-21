import React from "react";
import { Legend } from "recharts";

const BarChartLegend = () => {
  return (
    <Legend
      iconSize={13}
      iconType="line"
      wrapperStyle={{ marginTop: "14px" }}
      payload={[
        { value: "Jan", type: "line", color: "#330E47" },
        { value: "Feb", type: "line", color: "#011e56" },
        { value: "Mar", type: "line", color: "#182000" },
      ]}
    //   formatter={(value, entry) => {
    //     return <span className="Bar-Chart-legend-item">{value}</span>;
    //   }}
    />
  );
}

export default BarChartLegend;





