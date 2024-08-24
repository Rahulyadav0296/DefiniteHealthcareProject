import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logs from "./components/Logs/Logs";
import Summary from "./components/Summary/Summary";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/summary",
    errorElement: <ErrorPage />,
    element: <Summary />,
  },
  {
    path: "/logs",
    errorElement: <ErrorPage />,
    element: <Logs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
