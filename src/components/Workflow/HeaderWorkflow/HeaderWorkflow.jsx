import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import SaveIcon from "@mui/icons-material/Save";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Modal } from "@mui/material";
import dayjs from "dayjs";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDate, setShowWorkFlow } from "../../../utils/authSlice";
import "./HeaderWorkflow.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function HeaderWorkflow({ pageRef }) {
  const [open, setOpen] = useState(false);
  const showWorkFlow = useSelector((state) => state.auth.showWorkFlow);
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.auth.currentDate);

  const handleCalender = () => {
    setOpen(true); // Open the modal
  };

  const handleDateChange = (newDate) => {
    const formattedDate = dayjs(newDate).format("YYYY-MM-DD"); // or .toISOString()
    dispatch(setCurrentDate(formattedDate));
    setOpen(false); // Close the modal after selecting a date
  };

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

  const handleClose = () => {
    dispatch(setShowWorkFlow(!showWorkFlow));
  };

  return (
    <>
      <div className="workflow-header">
        <p className="workflow-title">Workflow</p>
        <div className="workflow-icons">
          <button
            onClick={handleClose}
            style={{
              marginLeft: "10px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            {showWorkFlow ? (
              <CloseIcon className="workflow-icon" />
            ) : (
              <VisibilityIcon className="workflow-icon" />
            )}
          </button>
          <DownloadIcon className="workflow-icon" onClick={handleDownload} />
          <SaveIcon className="workflow-icon" onClick={handleDownload} />
          <SnowshoeingIcon className="workflow-icon" />
          <EditCalendarIcon
            className="workflow-icon"
            onClick={handleCalender}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <div className="calendar-container">
            <Calendar
              value={new Date(currentDate)}
              onChange={handleDateChange}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default HeaderWorkflow;
