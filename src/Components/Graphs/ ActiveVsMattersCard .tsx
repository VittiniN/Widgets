import React from 'react';
import { Card } from 'react-bootstrap';
import { widgetDatas } from '../../Entities /widgetData';
import ActiveVsMattersBarChart from './ActiveVsMattersBarChart';

const ActiveVsMattersCard = () => {
  return (
    <div className="c1">
      <div className="row">
      <Card style={{ width: '28rem', border: 'solid' }}>
        <Card.Body>
          <Card.Title>Active VS Matters</Card.Title>
          <ActiveVsMattersBarChart />
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default ActiveVsMattersCard;
