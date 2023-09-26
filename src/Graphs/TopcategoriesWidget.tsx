import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Topcatergories } from "../Entities/widgetDataUtils";
// export const Topcatergories = [
//   { name: "jan", Jan: 10, Feb: 2, Mar: 43 },
//   { name: "Feb", Jan: 30, Feb: 10, Mar: 3 },
//   { name: "Mar", Jan: 10, Feb: 32, Mar: 2 },
// ];

interface LineChartProps {
  data?: any[];
  lines?: { dataKey: string }[];
  colors?: string[];
  fontWeight?: number | string;
  stroke?: number | string;
}

const Default_Font_Weight = "bold";
const Default_Stroke = "black";

const Linechart: React.FC<LineChartProps> = ({
  fontWeight = Default_Font_Weight,
  stroke = Default_Stroke,
  data = [],
  lines = [],
  colors = [],
}) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={Topcatergories}
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5,
      // }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontWeight }} />
      <YAxis />
      <Tooltip />
      {lines.map((line, index) => (
        <Line
          key={line.dataKey}
          type="monotone"
          dataKey={line.dataKey}
          stroke={colors[index] || 'black'} 
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
};

export default Linechart;

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { Topcatergories } from "../Entities/widgetDataUtils";
// import { interestformssubmitted } from "../Entities/widgetDataUtils";
// // import ActiveVsPostedButton from "../Components/selectmenu /MonthsPerMatter";

// interface LineChartGraphProps {

//   data?: Array<{ name: string, TopCategories: number, PostedMatters: number }>;
//  lineColorHex?: string;
// }

// const LineChartGraph: React.FC<LineChartGraphProps> = ({ data, lineColorHex }) => {
//   return (
//     <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Jan" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="Feb" stroke="#82ca9d" />
//         </LineChart>
//   );
// };

// export default LineChartGraph;
