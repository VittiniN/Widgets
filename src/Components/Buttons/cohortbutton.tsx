import React from "react";
import Button from "react-bootstrap/Button";

interface cohortButtonProps {
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  floatRight?: boolean;
  Top?: number;
}

const CohortButton: React.FC<cohortButtonProps> = ({
  buttonText,
  buttonStyle,
  floatRight,
  Top,
}) => {
  const buttonStyles: React.CSSProperties = {
    position: "relative",
      backgroundColor: "#DF6D04",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    height: "25px",
    float: floatRight ? "right" : "none",
    top: Top ? `${Top}px` : "0",
  };

  return (
    <div>
      <Button style={buttonStyles} variant="primary">
        {buttonText}
      </Button>
    </div>
  );
};

export default CohortButton;
