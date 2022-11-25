import { AppBar,Box, Toolbar, Typography } from "@mui/material"
import colorConfigs from "../../configs/colorConfigs"
import sizeConfigs from "../../configs/sizeConfigs"

const Topbar = () => {
  return (
    <AppBar position="fixed" sx={{ width: `calc(100% - ${sizeConfigs.sidebar.width})`,
    ml: sizeConfigs.sidebar.width, boxShadow: "unset",
    backgroundColor: colorConfigs.topBar.bg,
    color: colorConfigs.topBar.color }}>
      <Toolbar>
        <Typography variant="h6">
          <Box sx={{ fontFamily: "Monospace", letterSpacing: 10, fontWeight:"bold", fontSize: "40px", color:"black" }}>
            ARIOS
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar