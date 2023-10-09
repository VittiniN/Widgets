import React from "react";
import { Button } from "react-bootstrap";

interface SSPBWidgetCohortProps {
  cohortData: { programName: string; button: string }[];
}
const SSPBWidgetCohort: React.FC<SSPBWidgetCohortProps> = ({ cohortData }) => {
  return (
    <div>
      {cohortData.map((data, index) => (
        <div className="SSPBWidgetCohorttable" key={index}>
          <h3>{data.programName}</h3>
          <Button>{data.button}</Button>
        </div>
      ))}
    </div>
  );
};

export default SSPBWidgetCohort;