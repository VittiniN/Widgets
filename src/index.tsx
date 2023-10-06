import ReactDOM from "react-dom/client";
import SSPBLegend from "./Graphs/SSPBLegend";
import SSPBBarChart from "./Graphs/SSPBBarChartWidget";
import SSPBWidgetCohort from "./Components/CohortProgramWidget/SSPBWIdgetCohort";
import SSPBMetricWidget from "./Graphs/SSPBMetricWidget";
import SSPBWidgetline from "./Graphs/SSPBWidgetLineChart";
import SSPBWidgetCard from "./Components/SSPBWidgetCard/SSPBWidgetCard";
import SSPBWidgetPieChart from "./Graphs/SSPWidgetPieChart";
import SSPBWidgetCTA from "./Components/Buttons/SSPBWidgetCTA";
import SelectMenu from "./Components/selectmenu/selectMenu";

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
        <SelectMenu
          value={["Last 3 Months", "Last 6 Months", "Last 12 Months"]}
        />
      </div>

      <div slot="body">
        <SSPBBarChart
          data={[
            {
              name: "Jan",
              ActiveMatters: 20,
              PostedMatters: 2,
            },
            {
              name: "Feb",
              ActiveMatters: 30,
              PostedMatters: 40,
            },
            {
              name: "March",
              ActiveMatters: 70,
              PostedMatters: 20,
            },
          ]}
        />
      </div>

      <div slot="footer">
        <SSPBLegend
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
        <SelectMenu
          value={["Indiv. Rights", "Misc", "Fam.Law", "Cons. Case"]}
        />
      </div>

      <div slot="body">
        <SSPBMetricWidget
          value={10}
          metriccopy={
            "This is the average life of a time a case stays live on PBM"
          }
        />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Top Categories</h1>
      </div>

      <div slot="selectMenu">
        <SelectMenu
          value={["Indiv. Rights", "Misc", "Fam.Law", "Cons. Case"]}
        />
      </div>

      <div slot="body">
        <SSPBWidgetline
          dataKeys={["Jan", "Feb", "Mar", "Apr"]}
          data={[
            { name: "Jan", Jan: 10, Feb: 2, Mar: 43, Apr: 2 },
            { name: "Feb", Jan: 30, Feb: 10, Mar: 3, Apr: 5 },
            { name: "Mar", Jan: 20, Feb: 5, Mar: 3, Apr: 15 },
            { name: "Apr", Jan: 27, Feb: 8, Mar: 3, Apr: 25 },
          ]}
          colors={["#256EFF", "#DF6D04", "#3E8914", "#001C56"]}
        />
      </div>

      <div slot="footer">
        <SSPBLegend
          colors={["#256EFF", "#DF6D04", "#3E8914", "#001C56"]}
          values={["Indiv. Rights", "Misc", "Fam.Law", "Cons. Case"]}
        />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Interests Forms Submitted</h1>
      </div>
      <div slot="selectMenu">
        <SelectMenu value={["Jan", "Feb", "Mar"]} />
      </div>
      <div slot="body">
        <SSPBWidgetline
          dataKeys={["Jan", "Feb", "Mar"]}
          data={[
            { name: "Jan", Jan: 10, Feb: 2, Mar: 43, Apr: 2 },
            { name: "Feb", Jan: 30, Feb: 10, Mar: 3, Apr: 5 },
            { name: "Mar", Jan: 20, Feb: 5, Mar: 3, Apr: 15 },
          ]}
          colors={["#DF6D04", "#016669", "#330E47"]}
        />
      </div>

      <div slot="footer">
        <SSPBLegend
          values={["Jan", "Feb", "Mar"]}
          colors={["#DF6D04", "#016669", "#330E47"]}
        />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={true}>
      <div slot="header">
        <h1>Active Matters Per County</h1>
      </div>
      <div slot="selectMenu">
        <SelectMenu value={["FL", "RI", "MA", "CA"]} />
      </div>
      <div slot="body">
        <h1>
          <SSPBWidgetPieChart
            COLORS={["#256eFF", "#DF6D04", "#016669", "#001C56"]}
            data={[
              { name: "FL", value: 30 },
              { name: "RI", value: 40 },

              { name: "Ma", value: 40 },
              { name: "CA", value: 40 },
            ]}
          />
        </h1>
      </div>
      <div slot="footer">
        <SSPBLegend
          values={["FL", "MA", "CA", "RI"]}
          colors={["#256EFF", "#DF6D04", "#016669", "#001C56"]}
        />
      </div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={false}>
      <div slot="header">
        <h1> Get in Touch: </h1>
      </div>
      <div slot="selectMenu"></div>
      <div slot="body">
        <SSPBWidgetCTA
          buttonData={[
            {
              label: "Email Us",
            },
            {
              label: "Report a Bug",
            },

            {
              label: "Request a Feature",
            },
          ]}
        />
      </div>
      <div slot="footer"></div>
    </SSPBWidgetCard>

    <SSPBWidgetCard renderSelectMenu={false}>
      <div slot="header">
        <h1> Cohort Widget </h1>
      </div>
      <div slot="body">
        <SSPBWidgetCohort
          cohortData={[
            {
              programName: "Lorem ipsum dolor sit amet.",
              button: "Copy Catalog Url",
            },
            {
              programName: "Lorem ipsum dolor sit amet.",
              button: "Copy Catalog Url",
            },
            {
              programName: "Lorem ipsum dolor sit amet.",
              button: "Copy Catalog Url",
            },
            {
              programName: "Lorem ipsum dolor sit amet.",
              button: "Copy Catalog Url",
            },
            {
              programName: "Lorem ipsum dolor sit amet.",
              button: "Copy Catalog Url",
            },
          ]}
        />
      </div>
      <div slot="footer"></div>
    </SSPBWidgetCard>
  </>
);
