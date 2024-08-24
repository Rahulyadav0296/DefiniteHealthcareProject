import React from "react";

import Header from "../../components/Header/Header";
import Workflow from "../../components/Workflow/Workflow";
import "./Home.scss";
function Home() {
  return (
    <div className="header-workflow">
      {/* Header Details */}
      <Header />
      {/* Workflow Details */}
      <Workflow />
    </div>
  );
}

export default Home;
