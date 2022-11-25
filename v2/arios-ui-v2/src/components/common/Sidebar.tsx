import { Avatar, Drawer, List, Toolbar,Box } from "@mui/material"
import { Stack } from "@mui/system"
import assests from "../../assests"
import colorConfigs from "../../configs/colorConfigs"
import sizeConfigs from "../../configs/sizeConfigs"
import appRoutes from "../../routes/appRoutes"
import SidebarItem from "./SidebarItem"
import SidebarItemCollapse from "./SidebarItemCollapse"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { deepOrange } from '@mui/material/colors';

const Sidebar = () => {
  return (
    <Drawer variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper":{
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px"}}>
          <Stack
            sx={{ width : "100%"}}
            direction="row"
            justifyContent="center"
          >
            <img src={assests.images.logo} style={{ width: "285px", height: "57px"}} />
          </Stack>
          </Toolbar>
          {appRoutes.map((route, index) => (
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          ))}
      </List>
      <Box sx={{bottom:0,position:"absolute"}}>        
        <Avatar variant="rounded" sx={{ bgcolor: deepOrange[500] }}><LogoutOutlinedIcon /></Avatar>
        <span>ORACLE : &copy; 2022 All rights reserved </span>
      </Box>
      
    </Drawer>
  );
};

export default Sidebar;