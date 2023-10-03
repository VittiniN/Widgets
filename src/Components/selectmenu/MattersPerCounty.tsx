import Form from "react-bootstrap/Form";

function mattersPerCounty () {
  return (
    <div className="barchartbutton">
      <Form.Select aria-label="Default select example">
        <option value="1">FL</option>
        <option value="2">MA</option>
        <option value="3">CA</option>
        <option value="4">RI </option>
      </Form.Select>
    </div>
  );
}

export default mattersPerCounty;
