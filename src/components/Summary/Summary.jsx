import React from "react";
import sample from "../../utils/sample.json";
import "./Summary.scss";

const getLastRun = (time) => {
  const date = new Date(time);
  const formattedDate = date.toLocaleString();
  console.log(formattedDate);
  return formattedDate;
};

const getTableCount = (tableData) => {
  let count = 0;
  for (let i of tableData) {
    count += i.length;
  }
  return count;
};

const getTableHeadersCount = (headerCount) => {
  return headerCount.length;
};

function Summary() {
  return (
    <div className="summary-container">
      <p>Created At: {sample.created}</p>
      <p>Last Run: {getLastRun(sample.last_run)}</p>
      <p>Modification On: {getLastRun(sample.modified)}</p>
      <p>Project Name: {sample.project_name}</p>
      <p>Output Name: {sample.output_name}</p>
      <p>Row Count: {sample.row_count}</p>
      <p>Total Table Data is: {getTableCount(sample.table_data)}</p>
      <p>
        Total Headers in Table is: {getTableHeadersCount(sample.table_headers)}
      </p>
    </div>
  );
}

export default Summary;
