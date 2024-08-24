import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftHeaderSummary.scss";

function LeftHeaderSummary() {
  return (
    <div className="header-left-summary">
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        <button className="header-data">
          <SettingsIcon />
          Data
        </button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/summary"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <button className="header-summary-static">
          <SignalCellularAltIcon />
          Summary
        </button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/logs"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <button className="header-logs">
          <ArticleIcon />
          Logs
        </button>
      </NavLink>
    </div>
  );
}

export default LeftHeaderSummary;
