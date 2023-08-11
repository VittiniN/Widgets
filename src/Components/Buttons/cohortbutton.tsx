import Button from "react-bootstrap/Button";

interface cohortButtonProps {
  buttonText: string;
  buttonStyle?: React.CSSProperties;
}

const CohortButton: React.FC<cohortButtonProps> = ({
  buttonText,
  buttonStyle,
}) => {
  return (
    <div>
      <Button style={buttonStyle} variant="primary">
        {buttonText}{" "}
      </Button>
    </div>
  );
};

export default CohortButton;
