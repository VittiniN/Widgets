import React from "react";
import { Card } from "react-bootstrap";
import ActiveVsMattersBarChart from "./Barchartcard";
import ActiveVsPostedButton from "../Components/selectmenu /MonthsPerMatter";

const ActiveVsMattersCard = () => {
  return (
    <Card className="card-custom">
      <Card.Body>
        <ActiveVsPostedButton />
        <Card.Title>Active vs Posted Matters</Card.Title>

        <ActiveVsMattersBarChart />
      </Card.Body>
    </Card>
  );
};

export default ActiveVsMattersCard;
