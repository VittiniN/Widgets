import React from 'react';
import Button from 'react-bootstrap/Button';




interface SSPBWIdgetCTAProps {
    buttonData: { variant: string; label: string }[];    
    variant?: string;
    label?: string;
    }
    
    
const SSPBWidgetCTA: React.FC<SSPBWIdgetCTAProps> = ({ buttonData, variant,label}) => {
  return (
    <div className="SSPBWidgetCTA">
      {buttonData.map((button, index) => (
        <Button key={index} variant={button.variant} size="lg">
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default SSPBWidgetCTA;











   



