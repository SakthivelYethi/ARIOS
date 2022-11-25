import { 
    UilEstate, UilClipboardAlt,
    UilUsersAlt,UilPackage, UilChart, UilSignOutAlt, UilUsdSquare
} from "@iconscout/react-unicons"
import { color } from "@mui/system";

export const SidebarData = [
    {
        icon:UilEstate,
        heading: "Dashboard",
        url: "./dashboard"
    },
    {
        icon:UilClipboardAlt,
        heading: "Application",
        url: "./application"
    },
    {
        icon:UilClipboardAlt,
        heading: "Functions",
        url: "./functions"
    },
    {
        icon:UilClipboardAlt,
        heading: "Learning",
        url: "./testpack"
    },
    {
        icon:UilClipboardAlt,
        heading: "Testpack",
        url: "./testpack"
    },
    {
        icon:UilClipboardAlt,
        heading: "Execution",
        url: "./testpack"
    },
    {
        icon:UilPackage,
        heading: "Project",
        url: "./project"
    },
    {
        icon:UilSignOutAlt,
        heading: "Users",
        url: "./users"
    },
    {
        icon:UilChart,
        heading: "Report",
        url: "./report"
    },

];


export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "23232",
        png: UilUsdSquare,
        series: [{
            name: "Sales",
            data:[31, 40, 28, 51, 42, 109, 100]
        }]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "23232",
        png: UilUsdSquare,
        series: [{
            name: "Sales",
            data:[31, 40, 28, 51, 42, 109, 100]
        }]
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "23232",
        png: UilUsdSquare,
        series: [{
            name: "Sales",
            data:[31, 40, 28, 51, 42, 109, 100]
        }]
    }
];
