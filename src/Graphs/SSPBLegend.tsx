import React from "react";
import { Legend } from "recharts";

interface RechartsPayload {
  value: string;
  type?: "line" | "square" | "circle";
  color?: string;
}

const SSPBLegend: React.FC<{ values: string[]; colors: string[] }> = ({
  values,
  colors,
}) => {
  const payLoad: RechartsPayload[] = values.map((value, index) => ({
    value,
    type: "square" || "circle",
    color: colors[index] || "#256EFF",
  }));

  return <Legend wrapperStyle={{ marginTop: "14px" }} payload={payLoad} />;
};

export default SSPBLegend;