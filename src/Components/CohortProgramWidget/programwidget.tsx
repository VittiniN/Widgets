import { Card } from "react-bootstrap";
import CohortButton from "../Buttons/cohortbutton";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const ProgramWidget = () => {
  return (
    <div className="table-container">
      <table className="content_table">
        {/* Table Header */}
        <thead>
          <tr>
            <th> Program Name </th>
            <th> Links </th>
          </tr>
        </thead>

        <tbody>
          <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
          <td>
            <Button className=" clip-board">
              <FontAwesomeIcon className="font_awesome_clipboard" icon={faClipboard} size="1x" />

              <Card.Link href="#">Lorem ipsum </Card.Link>
            </Button>
          </td>
          <tr>
            <td>Lorem ipsumLorem ipsum Lorem ipsum </td>
            <td>
              <Card.Link href="#">
                Lorem ipsum Lorem ipsum Lorem ipsu Lorem 
              </Card.Link>
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum </td>
            <td>
              <Card.Link href="#">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum </td>
            <td>
              <Card.Link href="#">
                Lorem ipsum Lorem ipum Lorem ipsum Lorem
              </Card.Link>
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>
              <Card.Link href="#">
                 Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>
              <Card.Link href="#">
                 Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>
            </td>
          </tr>

          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>
              <Card.Link href="#">
                 Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>{" "}
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>
              <Card.Link href="#">
                 Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>
            </td>
          </tr>
          <tr>
            <td> Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>
              <Card.Link href="#">
                 Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
              </Card.Link>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2} className="footer">
              <CohortButton
                buttonText="Previous"
                buttonStyle={{
                  backgroundColor: "#DF6D04",
                  borderRadius: "5px",
                  height: "25px",
                  fontWeight: "bold",
                  color: "white",
                  position: "relative",
                  top: "15px",
                }}
              />
              <CohortButton
                buttonText="Next"
                buttonStyle={{
                  float: "right",
                  position: "relative",
                  bottom: "10px",
                  backgroundColor: "#DF6D04",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "25px",
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProgramWidget;
