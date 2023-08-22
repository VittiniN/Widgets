import React from "react";
import ReactDOM from "react-dom/client";
import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersWidget";
import LineChartGraph from "./Graphs/TopcategoriesWidget";
import { Topcatergories } from "./Entities /widgetDataUtils";
import { interestformssubmitted } from "./Entities /widgetDataUtils";
import Piechart from "./Graphs/PieChartWidget";
import "./index.css";
import PieChart from "./Graphs/PieChartWidget";
import ContactUsWidget from "./Components/CallToActionWidget/ContactUsWidget";
import Metric from "./Graphs/MetricWidget";
 import Table from "./Components/CohortProgramWidget/table";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="row">
      <ActiveVsMattersCard />
      <LineChartGraph data={Topcatergories} title="Top Categories" />
      <PieChart />
    </div>

    <div className="row1">
      <Metric value={10} />
      <LineChartGraph
        data={interestformssubmitted}
        title="Interest Forms Submitted"
      />
      <ContactUsWidget />
    </div>

    <div className="row3">
      <Table />
    </div>
  </React.StrictMode>
);
