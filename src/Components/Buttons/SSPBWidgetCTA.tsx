import React from "react";
import Button from "react-bootstrap/Button";

interface SSPBWIdgetCTAProps {
  buttonData: { label: string }[];
}

const SSPBWidgetCTA: React.FC<SSPBWIdgetCTAProps> = ({ buttonData }) => {
  return (
    <div className="SSPBWidgetCTA">
      {buttonData.map((button, index) => (
        <div className="SSPBWidgetCTA_buttons">
          <Button
            key={index}
            style={{
              marginBottom: "15px",
              borderRadius: "10px",
              height: "38px",
              backgroundColor: "#DF6D04",
              color: "white",
            }}
          >
            {button.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SSPBWidgetCTA;
