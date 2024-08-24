import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredTable } from "../../../../utils/authSlice";

function TableHeader() {
  const filteredTable = useSelector((state) => state.auth.filteredTable);
  console.log("The Filtered Item is: ", filteredTable);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let updatedTableHeader = filteredTable.table_headers.filter(
      (_, index) => index !== id
    );
    let updatedTableData = filteredTable.table_data.map((item) =>
      item.filter((_, index) => index !== id)
    );
    dispatch(
      setFilteredTable({
        ...filteredTable,
        table_headers: updatedTableHeader,
        table_data: updatedTableData,
      })
    );
  };
  return (
    <thead className="table-header">
      <tr>
        {filteredTable.table_headers.map((tableHeader, index) => (
          <th key={index} className="table-header-cell">
            <div className="header-content">
              <span>{tableHeader.name}</span>
              <button
                className="delete-icon"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
            <div className="header-content-item">
              <span>{tableHeader.type}</span>
              <KeyboardArrowDownIcon className="arrow-icon" />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
