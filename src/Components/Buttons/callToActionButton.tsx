import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EmailFormModal from "./callToActionButton";
 

interface CallToActionButtonProps {

show: boolean;
onHide: () => void;

}




const CallToActionButton: React.FC<CallToActionButtonProps> = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="call_to_action_buttons">
      <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>
        Email Us
      </Button>
      <Button variant="secondary" size="lg">
        Report A Bug
      </Button>
      <Button variant="secondary" size="lg" onClick={() => setModalShow(true)}>
        Request A Feature
      </Button>

      {/* Render EmailFormModal based on modalShow state */}
      <EmailFormModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default CallToActionButton;