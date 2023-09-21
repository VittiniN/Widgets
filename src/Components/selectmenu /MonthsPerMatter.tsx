import Form from "react-bootstrap/Form";

function ACTIVE_VS_MATTERS() {
  return (
    <div className="barchartbutton">
      <Form.Select aria-label="Default select example">
        <option value="1">Last 3 Months</option>
        <option value="2">Last 6 Months</option>
        <option value="3">Last 12 Months</option>
        
      </Form.Select>
    </div>
  );
}

export default ACTIVE_VS_MATTERS;
