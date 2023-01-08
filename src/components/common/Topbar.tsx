import { AppBar, Toolbar, Typography } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100%- ${sizeConfigs.sidebar.width})`,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.colors,
        pl: sizeConfigs.sidebar.width,
      }}
    >
      <Toolbar>
        <Typography variant="h6">Bình Chữa cháy team</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
