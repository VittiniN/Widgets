import React from "react";
import ReactDOM from "react-dom/client";
// import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersWidget";
import BarChartLegend from "./Graphs/legend";
import ACTIVE_VS_MATTERS from "./Components/selectmenu /MonthsPerMatter";
import ActiveVsMattersBarChart from "./Graphs/Barchartcard";
import Matters from "./Components/selectmenu /Matters";

import LineChartGraph from "./Graphs/TopcategoriesWidget";
import { Topcatergories } from "./Entities /widgetDataUtils";
import { interestformssubmitted } from "./Entities /widgetDataUtils";
// import "./index.css";
// import PieChart from "./Graphs/PieChartWidget";
// import ContactUsWidget from "./Components/CallToActionWidget/ContactUsWidget";
import Metric from "./Graphs/MetricWidget";
// import Table from "./Components/CohortProgramWidget/table";

import SSPBWidgetCard from "./Components/SSPBWidgetCard/SSPBWidgetCard";

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
      <BarChartLegend COLORS={["#DF6D04", "#256EFF", "#182000"]} type="line" datakey="yourDataKey" stroke="yourStrokeColor" />
      </div>
    </SSPBWidgetCard>

   
   
    <SSPBWidgetCard renderSelectMenu={true}>
  <div slot="header">
    <h1>Live Case Duration</h1>
    </div>
   
   <div slot="selectMenu"> 
   <Matters /> 
   </div>
  
  <div slot="body"><Metric value={10}  metriccopy ={"This is the average life of a time a case stays live on PBM" }/>
  </div>
  
  <div slot="footer">Footer</div>
</SSPBWidgetCard>


    
    
    
    
    
    
    
    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Top Categories </h1>
      </div>
<div slot="selectMenu">
<Matters />
</div>

      <div slot="body">
        <LineChartGraph  data={interestformssubmitted} title="" />{" "}
      </div>

      <div slot="footer">
      <BarChartLegend COLORS={["#DF6D04", "#256EFF", "#182000"]} type="line" datakey="yourDataKey" stroke="yourStrokeColor" />
      </div>


    </SSPBWidgetCard>

   
   
   
   
   
   
   
   
    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1> Interests Forms Submitted </h1>
      </div>

<div slot="selectMenu">

<ACTIVE_VS_MATTERS />

</div> 



      <div slot="body">
        <LineChartGraph data={interestformssubmitted} title="" />
      </div>



      <div slot="footer">
      <BarChartLegend COLORS={["#002347,", "#ff8e00,", "#003366,"]} type="line" datakey="yourDataKey" stroke="yourStrokeColor" />
      </div>



    </SSPBWidgetCard>
  </>
);
