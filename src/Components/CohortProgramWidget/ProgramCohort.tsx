import CohortButton from "../Buttons/cohortbutton";
import CopyButtonUrl from "./CopiedButton";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
interface TableCellProps {
  children: React.ReactNode;
}
const TableHeader = () => (
  <thead>
    <tr>
      <th>Program Name</th>
      <th>Links</th>
    </tr>
  </thead>
);

const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <td>{children}</td>
);



interface TableRowsProps {
  name: string;
  buttonCopy: string;
}

const TableRows: React.FC<TableRowsProps> = ({ name, buttonCopy }) => (
  <tr>
    <TableCell> {name} </TableCell>
    <TableCell>
      <CopyButtonUrl />
    </TableCell>
  </tr>
);

const CohortProgramWidget: React.FC = () => (
  <div className="table-container">
    <table className="content_table">
      <TableHeader />

      <tbody>
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url "
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url "
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
        <TableRows
          name="lorem Ipsum lorem Ipsum"
          buttonCopy="copy catolog url"
        />
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={2} className="footer">
            <CohortButton buttonText="Next" />

            <CohortButton buttonText="Previous" floatRight />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default CohortProgramWidget;
