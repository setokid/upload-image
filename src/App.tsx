import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import RootRoute from "./component/RootRoute/RootRoute";
import ListFile from "./pages/ListFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/fileUpload", element: <UploadPage /> },
      { path: "/fileList", element: <ListFile /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
