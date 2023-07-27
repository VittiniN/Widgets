import Form from 'react-bootstrap/Form';

function Active_Vs_Matters() {
  return (
    <Form.Select className="barchartbutton" aria-label="Default select example">
      <option value="1">Last Month</option>
      <option value="2">Last 2 Months</option>
      <option value="3">Last 3 Months</option>
      <option value="4">Last 4 Months</option>
    </Form.Select>
  );
}

export default Active_Vs_Matters; 