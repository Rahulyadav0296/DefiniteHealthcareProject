import React, { useRef } from "react";
import { useSelector } from "react-redux";
import sample from "../../utils/sample.json";
import HeaderWorkflow from "./HeaderWorkflow/HeaderWorkflow";
import StepBodyWorkflow from "./StepBodyWorkflow/StepBodyWorkflow";
import StepHeaderWorkflow from "./StepHeaderWorkflow/StepHeaderWorkflow";
import "./Workflow.scss";

function Workflow() {
  const pageRef = useRef();
  const showWorkFlow = useSelector((state) => state.auth.showWorkFlow);
  const expandedStepIds = useSelector((state) => state.auth.expandedStepIds);

  return (
    <div className="workflow-container">
      <HeaderWorkflow pageRef={pageRef} />
      {showWorkFlow && (
        <div className="workflow-steps" ref={pageRef}>
          {sample.workflow_steps.map((workflow) => (
            <div key={workflow.id} className="workflow-step">
              <StepHeaderWorkflow workflow={workflow} />
              {expandedStepIds.includes(workflow.id) && (
                <StepBodyWorkflow workflow={workflow} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workflow;
