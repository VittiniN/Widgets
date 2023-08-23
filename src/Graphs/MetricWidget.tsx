import React from "react";
import { Card } from "react-bootstrap";
// import { FaCaretUp } from "react-icons/fa";
// import { FaCaretDown } from "react-icons/fa";
import Matter from "../Components/selectmenu /Matters";

type MetricCardProps = {
  value: number;
};

const MetricCard: React.FC<MetricCardProps> = ({ value }) => {
  return (
    <div className="card-custom1">
      <Card>
        <Matter />

        <Card.Body>
          <div className="metric_title">
            <Card.Title>Live Case Duration</Card.Title>
          </div>

          <div className="metric-card__container"></div>
          <div className="metric-card__value">{value}</div>

          <div className="card-body-container">
            <Card.Text className="helpful_copy_metric">
              This is the average life of a time a case stays on live on PBM
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MetricCard;
