import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import sample from "../../utils/sample.json";
import "./Header.scss";
import LeftHeaderSummary from "./LeftSummary/LeftHeaderSummary";
import Project from "./ProjectDetails/Project";
import TableContent from "./TabelContent/TableContent";

function Header() {
  console.log(sample);
  return (
    <div className="header">
      <div className="header-content">
        <LeftHeaderSummary />
        <button className="header-save-button">
          <SaveIcon /> Download
        </button>
      </div>
      {/* Table Details  */}
      <div className="project-summary-details">
        <Project />
        <hr />
        <TableContent />
      </div>
    </div>
  );
}

export default Header;
