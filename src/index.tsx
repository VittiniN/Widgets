import React from "react";
import ReactDOM from "react-dom/client";
import ActiveVsMattersCard from "./Graphs/ ActiveVsMattersCard ";
import LineChartGraph from "./Graphs/Topcategories";
import { Topcatergories } from "./Entities /widgetDataUtils";
import { interestformssubmitted } from "./Entities /widgetDataUtils";
import Piechart from "./Graphs/piechart";
import { pieChartData } from "./Entities /widgetDataUtils";
import "./index.css";
import PieChart from "./Graphs/piechart";
import ContactUsWidget from "./Components/CallToActionWidget/contactus";
import ProgramWidget from "./Components/CohortProgramWidget/programwidget";
import Metric from "./Graphs/Metric";

// import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="row">
      {<ActiveVsMattersCard />}
      {<LineChartGraph data={Topcatergories} title=" Top Categories" />}
      {<PieChart />}
    </div>

    <div className="row1">
      {<Metric value={10} />}
      {<LineChartGraph data={interestformssubmitted} title="Interest Forms Submitted"/>}
      {<ContactUsWidget />}
    </div>
    
    <div className="row3">{<ProgramWidget />}</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
