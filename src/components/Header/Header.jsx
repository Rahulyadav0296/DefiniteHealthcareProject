import SaveIcon from "@mui/icons-material/Save";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import sample from "../../utils/sample.json";
import Workflow from "../Workflow/Workflow";
import "./Header.scss";
import LeftHeaderSummary from "./LeftSummary/LeftHeaderSummary";

function Header() {
  const pageRef = useRef();

  console.log(sample);
  const handleDownload = () => {
    toPng(pageRef.current).then((imgData) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight =
        (pageRef.current.clientHeight * imgWidth) / pageRef.current.clientWidth;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="header-workflow" ref={pageRef}>
        {/* Header Details */}
        <div className="header">
          <div className="header-content">
            <LeftHeaderSummary />
            <button className="header-save-button" onClick={handleDownload}>
              <SaveIcon /> Download
            </button>
          </div>
          {/* Table Details  */}
          <div className="project-summary-details">
            <Outlet />
          </div>
        </div>
        <Workflow />
      </div>
    </>
  );
}

export default Header;
