import React from 'react'
import "./dashboard.css"
import CachedIcon from '@mui/icons-material/Cached';
import { Button } from '@mui/material';
import DashboardCard from './Card';
import "./dashboard.css"

const Dashboard = () => {

  const dashboardCardsData = [
    {
      title: "Testpack",
      testcaseCount: 100,
      testStepCount: 300
    },
    {
      title: "Testcase",
      testcaseCount: 50,
      testStepCount: 400
    }
  ];

  React.useEffect(() => {
    document.title = "ARIOS | Dashboard";
  }, []);

  return (
    <div className="AppContainer">
      <h1>Dashboard</h1>
      <div className="sceenButtons">
        <Button variant="contained" size="small" sx={"margin-right:1rem"} color="success" endIcon={<CachedIcon />}>Refresh</Button>
      </div>

      <div className="app-screen-content">
        <div className="app-cards-wrapper">
          {dashboardCardsData.map((card, index) =>(
            <DashboardCard key={index} card={card} />
          ))}
        </div>       
      </div>
    </div>
  )
}

export default Dashboard