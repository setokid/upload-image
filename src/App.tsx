import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import RootRoute from "./component/RootRoute/RootRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/fileUpload", element: <UploadPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
