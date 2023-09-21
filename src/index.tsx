import React from "react";
import ReactDOM from "react-dom/client";
// import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersWidget";
import BarChartLegend from "./Graphs/legend";
import ACTIVE_VS_MATTERS from "./Components/selectmenu /MonthsPerMatter";
import ActiveVsMattersBarChart from "./Graphs/Barchartcard";

// import LineChartGraph from "./Graphs/TopcategoriesWidget";
// import {Topcatergories} from "./Entities /widgetDataUtils";
// import {interestformssubmitted} from "./Entities /widgetDataUtils";
// import "./index.css";
// import PieChart from "./Graphs/PieChartWidget";
// import ContactUsWidget from "./Components/CallToActionWidget/ContactUsWidget";
// import Metric from "./Graphs/MetricWidget";
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
        <ACTIVE_VS_MATTERS/>
      </div>

      <div slot="body">
        <ActiveVsMattersBarChart />
      </div>

      <div slot="footer">
        <BarChartLegend />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard>
      <div slot="header">
        <h1>Special Header</h1>
      </div>
      <div slot="body">Body</div>
      <h1 slot="footer">Footer</h1>
    </SSPBWidgetCard>

    <SSPBWidgetCard>
      <div slot="header">
        <h1>Special Header</h1>
      </div>
      <div slot="body">Body</div>
      <h1 slot="footer">Footer</h1>
    </SSPBWidgetCard>
  </>
);

// root.render(
//   <React.StrictMode>
//     <div className="row">
//       <ActiveVsMattersCard />
//       <LineChartGraph data={Topcatergories} title="Top Categories" />
//       <PieChart />
//     </div>

//     <div className="row1">
//       <Metric value={10} />
//       <LineChartGraph
//         data={interestformssubmitted}
//         title="Interest Forms Submitted"
//       />
//       <ContactUsWidget />
//     </div>

//     <div className="row3">
//       <Table />
//     </div>
//   </React.StrictMode>
// );
