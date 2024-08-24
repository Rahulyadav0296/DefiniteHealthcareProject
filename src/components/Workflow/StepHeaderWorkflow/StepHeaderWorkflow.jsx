import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpandedStepIds } from "../../../utils/authSlice";
import "./StepHeaderWorkflow.scss";

function StepHeaderWorkflow({ workflow }) {
  const expandedStepIds = useSelector((state) => state.auth.expandedStepIds);
  const dispatch = useDispatch();

  const handleShowDetails = (id) => {
    if (expandedStepIds.includes(id)) {
      // If the step is already expanded, remove it from the array
      dispatch(
        setExpandedStepIds(expandedStepIds.filter((stepId) => stepId !== id))
      );
    } else {
      // If the step is not expanded, add it to the array
      dispatch(setExpandedStepIds([...expandedStepIds, id]));
    }
  };
  return (
    <div className="workflow-step-header">
      <button
        className="wokflow-step-button"
        onClick={() => {
          handleShowDetails(workflow.id);
        }}
      >
        {expandedStepIds.includes(workflow.id) ? (
          <RemoveIcon className="workflow-step-remove-icon" />
        ) : (
          <AddIcon className="workflow-step-icon" />
        )}
      </button>
      <h4 className="workflow-step-title">{workflow.name_title}</h4>
    </div>
  );
}

export default StepHeaderWorkflow;
