import React from "react";
import Button from "react-bootstrap/Button";

interface cohortButtonProps {
  buttonText: string;
  buttonStyle?: React.CSSProperties;
  floatRight?: boolean;
}

const CohortButton: React.FC<cohortButtonProps> = ({
  buttonText,
  buttonStyle,
  floatRight,
}) => {
  const buttonStyles: React.CSSProperties = {
    position: "relative",
    bottom: "10px",
    backgroundColor: "#DF6D04",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    height: "25px",
    float: floatRight ? "right" : "none",
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
