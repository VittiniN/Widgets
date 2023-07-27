export {}; 

// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import {widgetDatas } from '../Entities /widgetData';
// import { Card } from 'react-bootstrap';
// import { LineChart, Line } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
// import Active_Vs_Matters from './Buttons/ActiveVsPostedButton';
// import MetricCard from './Metric'; 
// import Blocklevelbuttons from  './blocklevelbutton';
// import { SymbolDisplayPartKind } from 'typescript';

// const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d'];

// const RADIAN = Math.PI / 180;

// const WidgetChart = () => {
//   return (
//     <div>
   
//       <div className ="row"> 
//       <div className= "c1"> 
//       <Card   style={{ width: '28rem', border: 'solid' }}>
//           <Card.Body>
//          <Active_Vs_Matters /> 
//             <Card.Title>Active VS Matters</Card.Title>
//             <BarChart width={400} height={250} data={widgetDatas}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="ActiveMatters" fill="#8884d8" />
//               <Bar dataKey="PostedMatters" fill="#82ca9d" />
//             </BarChart>
//           </Card.Body>
//         </Card>
//         </div>
        
        
        
//         <Card style={{  width: '28rem', border: 'solid' }}>
//           <Card.Body>
   
//             <Card.Title>Line Chart</Card.Title>
          
//             <LineChart width={400} height={250} data={lineChart} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//               <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//             </LineChart>
//           </Card.Body>
//         </Card>
   

    
//         <Card  className= "card" style={{  width: '28rem', border: 'solid' }}>
//           <Card.Body>
     
//           <Card.Title style={{ textAlign: 'center', top: '18px' , position: 'relative' }}>Pie Chart</Card.Title>
//             <PieChart width={400} height={250}>
           
//               <Pie
//                 cx={220}
//                 cy={100}
//                 labelLine={false}
//                 label={renderCustomizedLabel}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//                 data={pieChartData}
//               >
//                 {pieChartData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
              
//               <Legend verticalAlign="bottom" height={36} />
            

//             </PieChart>
//           </Card.Body>
//         </Card>
//         </div>
    



//       <div className="row1">
       
//       <Card style={{ width: '28rem', border: 'solid' }}> 
//           <Card.Body>
        
//             <Card.Title>Line Chart</Card.Title>
         
//             <LineChart width={400} height={250} data={lineChart} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//               <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//             </LineChart>
//           </Card.Body>
//         </Card>
    
        
//         <Card style={{ maxWidth: '100%', width: '28rem', height: '285px', border: 'solid'}}> 
//           <Card.Title>Hey!
//             <br /> 
//              Get in contact, report a bug or share your feedback 
//              </Card.Title>
//          <Card.Body>
//          <Blocklevelbuttons />
//    </Card.Body>
//     </Card>


// <Card style={{ maxWidth: '100%', height: '285px' , width: '28rem', border: 'solid'}}>
//         <Card.Body>
         
//             <MetricCard title="Live Case Durations" value={10} />
//             <Card.Text style={{ marginTop: '5px', textAlign: 'center' , opacity: 0.2, fontSize: '12px'}}>
//             This is the average life of a time a case stays on live on PBM
//           </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
 
// <div className="row3">
// <Card style={{ maxWidth: '100%', height: '280px' ,width: '80rem', border: 'solid' , marginLeft: '80px' }}>
//         <Card.Body>
      
//         <Card.Link href="#">Card Link</Card.Link>
        
     
            
//           </Card.Body>
//         </Card>

// </div>
// </div>

   











//   );
//                 }
// export default WidgetChart;
