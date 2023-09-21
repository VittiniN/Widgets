// import React, { useState } from "react";
// import { ClipboardFill } from "react-bootstrap-icons";
// import Button from "react-bootstrap/Button";

// function CopyButtonUrl() {
//   const [isCopied, setIsCopied] = useState(false);
//   const [buttonText, setButtonText] = useState("Copy Catalog URL");

//   const handleCopyClick = () => {
//     const urlToCopy = window.location.href;
//     navigator.clipboard.writeText(urlToCopy).then(() => {
//       setIsCopied(true);
//       setButtonText("Copied");
//       setTimeout(() => {
//         setIsCopied(false);
//         setButtonText("Copy Catalog URL");
//       }, 1000);
//     });
//   };

//   return (
//     <Button className="clip-board" onClick={handleCopyClick}>
//       {isCopied ? "Copied" : buttonText}

//       <ClipboardFill className="clip-board-icon" />
//     </Button>
//   );
// }

// export default CopyButtonUrl;


export {}