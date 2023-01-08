import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GooglediveLayout from "../pages/googledrive/GoogleLayout.tsx";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import UploadPage from "../pages/googledrive/UploadPage";
import ListFilePage from "../pages/googledrive/ListFilePage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    index: true,
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeOutlinedIcon />,
    },
  },
  {
    element: <GooglediveLayout />,
    state: "drive",
    sidebarProps: {
      displayText: "Google Drive",
      icon: <AddToDriveIcon />,
    },
    child: [
      {
        path: "/drive/upload",
        element: <UploadPage />,
        state: "drive.upload",
        sidebarProps: {
          displayText: "Upload File",
          icon: <DriveFolderUploadIcon />,
        },
      },
      {
        path: "/drive/file",
        element: <ListFilePage />,
        state: "drive.file",
        sidebarProps: {
          displayText: "File",
          icon: <FolderSharedIcon />,
        },
      },
    ],
  },
];

export default appRoutes;
