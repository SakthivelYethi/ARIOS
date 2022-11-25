import Dashboard from "../pages/dashbaord/Dashboard";
import Home from "../pages/home/Home";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Applications from "../pages/administrator/Applications";
import User from "../pages/administrator/User";
import Learning from "../pages/administrator/Learning";
import Functions from "../pages/functions/Functions";
import Testcase from "../pages/tests/Testcase";
import TestPack from "../pages/tests/TestPack";
import Execution from "../pages/execution/Execution";
import Settings from "../pages/settings/Settings";
import Report from "../pages/reports/Report";
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import AdministratorPage from "../pages/administrator/AdministratorPage";
import TestPackPage from "../pages/tests/TestPackPage";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import UserDetails from "../pages/administrator/user/UserDetails";
import Clients from "../pages/administrator/Clients";


const appRoutes: RouteType[] = [
    {
        index: true,
        element: <UserDetails />,
        path: "/administrator/userDetails",
        state: "administrator.users",
        isNotMenu: true,
        sidebarProps: {
            displayText: "User Details",
            icon: <DashboardOutlinedIcon />
        }
    },
    {
        index: true,
        element: <Home />,
        path: "home",
        state: "home",
        isNotMenu: true,
        sidebarProps: {
            displayText: "Home",
            icon: <DashboardOutlinedIcon />
        }
    },
    {
        index: true,
        element: <Home />,
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <DashboardOutlinedIcon />
        }
    },
    {
       path: "/dashboard",
       element: <Dashboard />,
       state: "dashboard",
       sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardOutlinedIcon />
       }
    },
    {
        path: "/administrator",
        element: <AdministratorPage />,
        state: "administrator",
        sidebarProps: {
         displayText: "Administrator",
         icon: <SupervisorAccountIcon />
        },
        child: [
            {
                path: "/administrator/applications",
                element: <Applications />,
                state: "administrator.applications",
                sidebarProps: {
                    displayText: "Applications"
                }
            },
            {
                path: "/administrator/users",
                element: <User />,
                state: "administrator.users",
                sidebarProps: {
                    displayText: "Users"
                }
            },
            {
                path: "/administrator/clients",
                element: <Clients />,
                state: "administrator.clients",
                sidebarProps: {
                    displayText: "Clients"
                }
            },
            {
                path: "/administrator/learning",
                element: <Learning />,
                state: "administrator.learning",
                sidebarProps: {
                    displayText: "Learning"
                }
            }
        ]
     },
     {
        path: "/functions",
        element: <Functions />,
        state: "functions",
        sidebarProps: {
         displayText: "Functions",
         icon: <TravelExploreIcon />
        }
     },
     {
        path: "/tests",
        element: <TestPackPage />,
        state: "tests",
        sidebarProps: {
         displayText: "Tests",
         icon: <FolderZipIcon />
        },
        child: [
            {
                path: "/tests/testcases",
                element: <Testcase />,
                state: "tests.testcases",
                sidebarProps: {
                    displayText: "Testcase"
                }
            },
            {
                path: "/tests/testpacks",
                element: <TestPack />,
                state: "tests.testpacks",
                sidebarProps: {
                    displayText: "TestPack"
                }
            }
        ]
     },
     {
        path: "/execution",
        element: <Execution />,
        state: "execution",
        sidebarProps: {
         displayText: "Execution",
         icon: <ImportantDevicesIcon />
        }
     },
     {
        path: "/settings",
        element: <Settings />,
        state: "settings",
        sidebarProps: {
         displayText: "Settings",
         icon: <SettingsIcon />
        }
     },
     {
        path: "/reports",
        element: <Report />,
        state: "reports",
        sidebarProps: {
         displayText: "Reports",
         icon: <ShareIcon />
        }
     }
];

export default appRoutes;