// import { useEffect,} from "react";
// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";

// interface CallToActionButtonProps {
//   email: string;
//   message: string;
//   e: string; 
// }

// const CallToActionButton = () => {
//   const [showModal, setModalShow] = useState(false);

//   const handleShowModal = () => {
//     setModalShow(true);
//   };

//   const handleCloseModal = () => {
//     setModalShow(false);
//   };

//   const handleEmailChange = () => {
//     console.log("email changed");
//   };

//   const handleClickOutside = (e) => {
//     if (showModal && e.target.closest(".modal") === null) {
//       handleCloseModal(); 
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("click", handleClickOutside);
//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//       handleClickOutside(e); 
//     };
//   }, [showModal]);

//   return (
//     <div className="call_to_action_buttons">
//       <Button variant="primary" size="lg" onClick={handleShowModal}>
//         Email Us
//       </Button>
//       <Button variant="secondary" size="lg" onClick={handleShowModal}>
//         Report A Bug
//       </Button>
//       <Button variant="secondary" size="lg">
//         Request A Feature
//       </Button>

//       <div className="modal">
//         <Modal
//           show={showModal}
//           onHide={handleCloseModal}
//           centered
//           onClick={handleClickOutside}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Email Us</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group controlId="emailInput">
//                 <Form.Label>Enter Your Email:</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   // value={email}
//                   onChange={handleEmailChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="messageInput">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   placeholder="Enter your message"
//                   // value={message}
//                   // onChange={handleMessageChange}
//                 />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleCloseModal}>
//               Send Email
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default CallToActionButton;


export{}