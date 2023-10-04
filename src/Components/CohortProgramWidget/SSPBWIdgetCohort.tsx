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
            <h2>{data.programName}</h2>
            <button>{data.button}</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default SSPBWidgetCohort;
  
  
  
  
  
  