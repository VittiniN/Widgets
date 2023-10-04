import React from "react";
import Button from "react-bootstrap/Button";

interface SSPBWIdgetCTAProps {
  buttonData: { variant: string; label: string }[];
  variant?: string;
  label?: string;
}

const SSPBWidgetCTA: React.FC<SSPBWIdgetCTAProps> = ({
  buttonData,
  variant,
  label,
}) => {
  return (
    <div className="SSPBWidgetCTA">
      {buttonData.map((button, index) => (
        <div className="SSPBWidgetCTA_buttons">
          <Button
            key={index}
            variant={button.variant}
            size="lg"
            style={{ marginBottom: "15px", borderRadius: "10px" , height: "38px", backgroundColor:"#DF6D04", color: "white" }}
          >
            {button.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SSPBWidgetCTA;
