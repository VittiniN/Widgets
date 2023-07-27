import React from 'react';


type MetricCardProps = {
    title: string;
    value: number;
  };
  


const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
    return (
      <div className="metric-card">
        <h3 className="metric-card__title">{title}</h3>
        <div className="metric-card__value">{value}</div>
      </div>
    );
  };
  
  export default MetricCard;