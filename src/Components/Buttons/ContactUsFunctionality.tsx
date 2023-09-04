import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface EmailFormModalProps {
  show: boolean;
  onHide: () => void;
}

const EmailFormModal: React.FC<EmailFormModalProps> = ({ show, onHide }) => {
  return (
    <Modal className="modal" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Email Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailFormModal;
