import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";
import Logs from "./components/Logs/Logs";
import Summary from "./components/Summary/Summary";
import ErrorPage from "./pages/Error/ErrorPage";

const RootLayer = () => {
  return (
    <>
      <Header /> {/* Header remains the same for all routes */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayer />,
    children: [
      {
        path: "",
        element: <Data />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
