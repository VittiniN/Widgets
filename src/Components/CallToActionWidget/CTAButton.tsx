import React from "react";
import { Button } from "react-bootstrap";
import { FaAt, FaBug, FaPlusSquare } from "react-icons/fa";

const ctaButtons = () => {
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

export default ctaButtons; 






