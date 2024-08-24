import React from "react";
import TableBody from "./TableBody/TableBody";
import "./TableContent.scss";
import TableHeader from "./TableHeader/TableHeader";

function TableContent() {
  return (
    <div className="table-container">
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default TableContent;
