import React from "react";
import ReactDOM from "react-dom/client";
// import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersWidget";
import BarChartLegend from "./Graphs/SSPBLegend";
import ACTIVE_VS_MATTERS from "./Components/selectmenu/MonthsPerMatter";
import MattersPerCounty from "./Components/selectmenu/MattersPerCounty";
import ActiveVsMattersBarChart from "./Graphs/SSPBBarChartCard";
import Matters from "./Components/selectmenu/Matters";

import { Topcatergories } from "./Entities/widgetDataUtils";
import { interestformssubmitted } from "./Entities/widgetDataUtils";
// import Topcatergorieswidget from "./Graphs/TopcategoriesWidget";
// import PieChart from "./Graphs/PieChartWidget";
// import ContactUsWidget from "./Components/CallToActionWidget/ContactUsWidget";
import Metric from "./Graphs/SSPBMetricWidget";
// import { Line, LineChart } from "recharts";
// import { CartesianGrid, LineChart, XAxis, YAxis } from "recharts";
import SSPBWidgetlineChart from "./Graphs/SSPBWidgetlineChart";

// import Table from "./Components/CohortProgramWidget/table";

import SSPBWidgetCard from "./Components/SSPBWidgetCard/SSPBWidgetCard";
// import Linechart from "./Graphs/TopcategoriesWidget";
import SSPBWidgetPieChart, { PieChartData } from "./Graphs/SSPWidgetPieChart";
import SSPBWidgetCTA from "./Components/Buttons/SSPBWidgetCTA";
import { LineChart } from "recharts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Active vs Posted Matters</h1>
      </div>

      <div slot="selectMenu">
        <ACTIVE_VS_MATTERS />
      </div>

      <div slot="body">
        <ActiveVsMattersBarChart />
      </div>

      <div slot="footer">
        <BarChartLegend
          colors={["#DF6D04", "#256EFF", "#DF6D04"]}
          values={["Jan", "Feb", "Mar"]}
        />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Live Case Duration</h1>
      </div>

      <div slot="selectMenu">
        <Matters />
      </div>

      <div slot="body">
        <Metric
          value={10}
          metriccopy={
            "This is the average life of a time a case stays live on PBM"
          }
        />
      </div>

      <div slot="footer">Footer</div>
    </SSPBWidgetCard>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Top Categories</h1>
      </div>

      <div slot="selectMenu">
        <Matters />
      </div>

      <div slot="body">
      <SSPBWidgetlineChart
  dataKeys={["Jan", "Feb", "Mar", "Apr"]} 
  data={[
    { name: "Jan", Jan: 10, Feb: 2, Mar: 43, Apr: 2 },
    { name: "Feb", Jan: 30, Feb: 10, Mar: 3, Apr: 5 },
    { name: "Mar", Jan: 20, Feb: 5, Mar: 3, Apr: 15 },
    { name: "Apr", Jan: 27, Feb: 8, Mar: 3, Apr: 25 },
    { name: "May", Jan: 27, Feb: 8, Mar: 3, Apr: 26 },
  ]}
  colors={["#256EFF", "#DF6D04", "#3E8914", "#0669"]}
/>
</div>

      <div slot="footer">
        <BarChartLegend
          colors={["#256EFF", "#DF6D04", "##3E8914","##0669"]}
          values={["Indiv. Rights","Misc", "Fam.Law", "Cons. Case"]}
        
        />
      </div>
    </SSPBWidgetCard>

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Interests Forms Submitted</h1>
      </div>
      <div slot="selectMenu">
        <ACTIVE_VS_MATTERS />
      </div>
      <div slot="body">
      <SSPBWidgetlineChart
          dataKeys={["Jan", "Feb", "Mar",]} 

          data={[
            { name: "Jan", Jan: 10, Feb: 2, Mar: 43, Apr: 2 },
            { name: "Feb", Jan: 30, Feb: 10, Mar: 3, Apr: 5 },
            { name: "Mar", Jan: 20, Feb: 5, Mar: 3, Apr: 15 },
          
          ]}
          colors={["#DF6D04", "#330e47", "#256eFF","#016669"]}
        />
  
        
        
        
 </div>
    
      
      
      <div slot="footer">
        <BarChartLegend
          values={[
            "Jan",
            "Feb",
            "Mar",
          ]}
          colors={["#002347", "#ff8e00", "#003366", "#00C49F"]}
          
        />
      </div>
    </SSPBWidgetCard>

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Active Matters Per County</h1>
      </div>
      <div slot="selectMenu">
        <MattersPerCounty />
      </div>
      <div slot="body">
        <h1>
          <SSPBWidgetPieChart
          COLORS={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
          />
        </h1>
      </div>
      <div slot="footer">
        <BarChartLegend
          values={
            [
              "FL",
              "MA",
              "CA",
              "RI",
            ]
          }
          colors={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
          type="line"
        />
      </div>
    </SSPBWidgetCard>
    
    
<SSPBWidgetCard renderSelectMenu={false} >
<div slot="header">
  <h1> Get in Touch: </h1>
  </div>
  <div slot="selectMenu">
    </div>
    <div slot="body">
    <SSPBWidgetCTA
  buttonData={[
    {
      variant: "primary",
      label: "Email Us",
      
    },
    {
      variant: "secondary",
      label: "Report a Bug"
    },
    
    {
      variant: "secondary",
      label: "Request a Feature"
    }

    
  ]}

/>
     
      </div>
      <div slot="footer">
        </div>


</SSPBWidgetCard>


<SSPBWidgetCard renderSelectMenu={false} >
<div slot="header">
  <h1>  Cohort Widget </h1>
  </div>
  <div slot="selectMenu">
    </div>
    <div slot="body">
      </div>
      <div slot="footer">
        </div>


</SSPBWidgetCard>











  </>
);
