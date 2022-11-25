import { ListItemButton, ListItemIcon } from '@mui/material';
import { useEffect} from 'react'
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import { RootState } from '../../redux/features/store';
import { RouteType } from '../../routes/config'
import { useSelector } from "react-redux";

type Props = {
    item: RouteType;
}

const SidebarItem = ({ item }: Props) => {

  const { appState } = useSelector((state: RootState) => state.appState);
  useEffect(() => {
    if(appState.includes(item.state)) {
      document.title = 'ARIOS | ' + item.sidebarProps.displayText
    }
  }, [appState, item])
  return (
    item.sidebarProps && item.path && !item.isNotMenu ? (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
                "&: hover": {
                    backgroundColor: colorConfigs.sidebar.hoverBg
                },
                backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
                paddingY: "12px",
                paddingX: "24px"
            }}
        >
              <ListItemIcon sx={{
                color: colorConfigs.sidebar.color
              }}>
                {item.sidebarProps.icon && item.sidebarProps.icon}
              </ListItemIcon>
              {item.sidebarProps.displayText}
             </ListItemButton>
    ) : null
  ) 
}

export default SidebarItem