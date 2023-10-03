import React from "react";
import ReactDOM from "react-dom/client";
// import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersWidget";
import BarChartLegend from "./Graphs/legend";
import ACTIVE_VS_MATTERS from "./Components/selectmenu/MonthsPerMatter";
import MattersPerCounty from "./Components/selectmenu/MattersPerCounty";
import ActiveVsMattersBarChart from "./Graphs/Barchartcard";
import Matters from "./Components/selectmenu/Matters";

import { Topcatergories } from "./Entities/widgetDataUtils";
import { interestformssubmitted } from "./Entities/widgetDataUtils";
import Topcatergorieswidget from "./Graphs/TopcategoriesWidget";
// import PieChart from "./Graphs/PieChartWidget";
// import ContactUsWidget from "./Components/CallToActionWidget/ContactUsWidget";
import Metric from "./Graphs/MetricWidget";
// import { Line, LineChart } from "recharts";
import { CartesianGrid, LineChart, XAxis, YAxis } from "recharts";
// import LineChart from "./Graphs/TopcategoriesWidget";

// import Table from "./Components/CohortProgramWidget/table";

import SSPBWidgetCard from "./Components/SSPBWidgetCard/SSPBWidgetCard";
import Linechart from "./Graphs/TopcategoriesWidget";
import SSPBWidgetPieChart, { PieChartData } from "./Graphs/SSPWidgetPieChart";
import SSPBWidgetCTA from "./Components/Buttons/SSPBWidgetCTA";

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
        <Linechart
          data={Topcatergories}
          lines={[
            { dataKey: "Jan" },
            { dataKey: "Feb" },
            { dataKey: "Mar" },

            { dataKey: "April" },
          ]}
          colors={["red", "red", "red", "pink"]}
          stroke={["#8884d8", "#82ca9d", "#ffc658", "#ff7300"]}

        />
      </div>

      <div slot="footer">
        <BarChartLegend
          colors={["#DF6D04", "#256EFF", "#182000"]}
          values={["Misc", "Individual Rights", "Family Law", "Consumer Case"]}
          type="line"
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
      <Linechart
  data={interestformssubmitted}
  lines={[
    { dataKey: "Jan" },
    { dataKey: "Feb" },
    { dataKey: "Mar" },
    { dataKey: "April" },
  ]}
  colors={["pink", "orange", "yellow", "green"]}
/>

      </div>
      
      
      
      <div slot="footer">
        <BarChartLegend
          values={[
            "Miami-dade",
            "Another County",
            "Yet Another County",
            "One More County",
          ]}
          colors={["#002347", "#ff8e00", "#003366", "#00C49F"]}
          type="line"
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
              "Miami-dade",
              "Another County",
              "Yet Another County",
              "One More County",
            ]
          }
          colors={[]}
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
      <SSPBWidgetCTA />
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
