// import React from "react";
// import { Card } from "react-bootstrap";
// import { PieChart, Pie, Cell, Legend as RechartsLegend } from "recharts";
// import { pieChartData } from "../Entities/widgetDataUtils";
// import { renderCustomizedLabel } from "../Entities/widgetDataUtils";
// import MattersPerCounty from "../Components/selectmenu/MattersPerCounty";

// interface PieChartData {
//   entry: string;
// }

// const PieChartWidget: React.FC = () => {
//   return (
//     <Card className="card-custom">
//       <Card.Body>
//         <MattersPerCounty />
//         <PieChart width={400} height={250}>
//           <Pie
//             cx={200}
//             cy={100}
//             labelLine={false}
//             label={(entry: any) => renderCustomizedLabel(entry)} // Explicitly type entry as 'any'
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             data={pieChartData}
//           >
//             {pieChartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <RechartsLegend className="custom-legend" />
//         </PieChart>
//       </Card.Body>
//     </Card>
//   );
// };

// export default PieChartWidget;

export {}