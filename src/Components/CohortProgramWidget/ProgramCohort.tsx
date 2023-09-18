import CohortButton from "./cohortbutton";
import CopyButtonUrl from "./ClipboardAction";

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
            <CohortButton buttonText="Next" Top={28}  />

            <CohortButton buttonText="Previous" floatRight />
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default CohortProgramWidget;
