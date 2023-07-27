import Button from 'react-bootstrap/Button';

import React from 'react';



const BlockExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div className= 'CTA'>
      <Button variant="primary" size="lg" style={{ marginBottom: '10px', width: '100%', maxWidth: '280px' , height: '38px', borderRadius: '10px'}}>
         Contact Us 
         <br /> 
     Contact us for any help
         
      </Button>
      <Button variant="secondary" size="lg" style={{marginBottom: '10px', width: '100%' , maxWidth:'280px', height: '38px', borderRadius: '10px',  }}>
         Report a bug 
         <br /> 
         Let us know if you find a bug 

      </Button>
      <Button variant="secondary" size="lg" style={{ marginBottom: '10px', width: '100%' , maxWidth:'280px', height: '38px', borderRadius: '10px'}}>
        Request a feature
        <br /> 
        Let us know about a feature
      </Button>
    </div>
    </div>
  );
}

export default BlockExample;
