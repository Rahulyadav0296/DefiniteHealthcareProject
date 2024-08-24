import React from "react";
import { useSelector } from "react-redux";

function TableBody() {
  const filteredTable = useSelector((state) => state.auth.filteredTable);

  return (
    <tbody>
      {filteredTable.table_data.map((tableRow, rowIndex) => (
        <tr key={rowIndex}>
          {tableRow.map((data, cellIndex) => (
            <td key={cellIndex} className="table-cell">
              {data}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
