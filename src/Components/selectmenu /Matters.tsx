import Form from "react-bootstrap/Form";

function Matter_duration() {
  return (
        <div className= "matter_btn">
      <Form.Select aria-label="Default select example">
        <option value="1">Individual Rights</option>
        <option value="2">Misc</option>
        <option value="3">Family Law</option>
        <option value="4">Consumer Cases </option>
      </Form.Select>
    </div>
  );
}

export default Matter_duration;
