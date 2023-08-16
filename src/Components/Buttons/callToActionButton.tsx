import React from "react";
import { Button } from "react-bootstrap";

const CtaButtons = () => {
  return (
    <div className="call_to_action_buttons">
      <Button variant="primary" size="lg">
        Email Us
        <br />
     
      </Button>
      <Button variant="secondary" size="lg">
        Report A Bug 
        <br />
        
      </Button>
      <Button variant="secondary" size="lg">
        Request A Feature 
        <br />
      
      </Button>
    </div>
  );
};

export default CtaButtons; 






