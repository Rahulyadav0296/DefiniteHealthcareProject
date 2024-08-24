import React from "react";
import "./ErrorPage.scss";
function ErrorPage() {
  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-title">404 Page</h1>
        <p className="not-found-message">
          Page Not Found Please check the path.
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
