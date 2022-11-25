import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import colorConfigs from "../../configs/colorConfigs"
import sizeConfigs from "../../configs/sizeConfigs"
import Sidebar from "../common/Sidebar"
import Topbar from "../common/Topbar"

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Topbar /> */}
      <Box component="nav" sx={{ width: sizeConfigs.sidebar.width, flexShrink: 0 }}>
        <Sidebar />            
      </Box>
      <Box component="main" sx={{ flexShrink: 1, width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        minHeight: "100vh",
        backgroundColor: colorConfigs.mainBg,
        position: "absolute",
        top: 0, bottom: 0, right: 0, left: sizeConfigs.sidebar.width
      }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout