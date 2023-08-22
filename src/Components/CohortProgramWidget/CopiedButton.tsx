import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";




function CopyButtonUrl() {
  const [isCopied, setIsCopied] = useState(false);
  const [buttonText, setButtonText] = useState('Copy');

  const handleCopyClick = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy).then(() => {
      setIsCopied(true);
      setButtonText('Copied');
      setTimeout(() => {
        setIsCopied(false);
        setButtonText('Copy');
      }, 1000);
    });
  };

  return (
    <Button className="clip-board" onClick={handleCopyClick}>
      {isCopied ? 'Copied' : buttonText}
      <FontAwesomeIcon
        className="font_awesome_clipboard"
        icon={faClipboard}
        size="1x"
      />
    </Button>
  );
}




export default CopyButtonUrl;


