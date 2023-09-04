import React from "react";
import { Card } from "react-bootstrap";
// import CallToActionButton from "../Buttons/callToActionButton";

const ContactUsWidget = () => {
  return (
    <Card className="card-custom1">
      <Card.Body>
        <div className="contact_us_title">
          <Card.Title>
            Get In Touch:
            <br />
          </Card.Title>
        </div>
        {/* <CallToActionButton  /> */}
      </Card.Body>
    </Card>
  );
};

export default ContactUsWidget;
