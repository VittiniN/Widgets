import React from "react";
import { Legend } from "recharts";
import { Line } from "recharts";
interface BarChartLegendProps {
   COLORS: string[]; 
   type: string;
   datakey: string;
   stroke: string;
  }
  
const BarChartLegend: React.FC<BarChartLegendProps> = ({COLORS,
    type,
    datakey,
    stroke,}) => {
  return (
    <Legend
    //   iconSize={13}
    //   iconType="line"
      wrapperStyle={{ marginTop: "14px" }}
      payload={[
        { value: "Jan", type: "line", color: "#DF6D04" },
        { value: "Feb ", type: "line", color: "#256EFF" },
        { value: "Mar", type: "line", color: "#182000" },
        
      ]}
    //   formatter={(value, entry) => {
    //     return <span className="Bar-Chart-legend-item">{value}</span>;
    //   }}
    />
 
  );
}

export default BarChartLegend;





