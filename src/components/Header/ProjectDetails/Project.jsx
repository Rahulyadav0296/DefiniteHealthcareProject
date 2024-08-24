import AcUnitIcon from "@mui/icons-material/AcUnit";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import React from "react";
import sample from "../../../utils/sample.json";
import "./Project.scss";

const getLastRun = (time) => {
  const date = new Date(time);
  const formattedDate = date.toLocaleString();
  console.log(formattedDate);
  return formattedDate;
};

function Project() {
  return (
    <div className="container">
      <div className="info-section">
        <div className="info-item">
          <p className="info-label">
            <AcUnitIcon />
            PROJECT NAME
          </p>
          <span className="info-value">{sample.project_name}</span>
        </div>
        <div className="info-item">
          <p className="info-label">
            <StorageIcon /> OUTPUT DATABASE NAME
          </p>
          <span className="info-value">{sample.output_name}</span>
        </div>
        <div className="info-item">
          <p className="info-label">
            <TerminalIcon /> LAST RUN
          </p>
          <span className="info-value">{getLastRun(sample.last_run)}</span>
        </div>
      </div>
      <div className="rows-info">
        <p>Rows: {sample.row_count}</p>
      </div>
    </div>
  );
}

export default Project;
