import React from "react";
import "./StepBodyWorkflow.scss";
function StepBodyWorkflow({ workflow }) {
  return (
    <div className="workflow-step-body">
      <ul className="workflow-step-details">
        {workflow.params_extra &&
          Object.entries(workflow.params_extra).map(([key, value]) => (
            <li key={key} className="workflow-step-detail">
              <strong>{key}: </strong>
              {Array.isArray(value)
                ? value.join(", ")
                : value !== null
                ? value.toString()
                : "N/A"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default StepBodyWorkflow;
