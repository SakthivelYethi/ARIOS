import React from 'react'
import TestPackCard from './Card';
import CachedIcon from '@mui/icons-material/Cached';
import { Button } from '@mui/material';

const TestpackContainer = () => {

  const testPackDetailCards = [
    {
      title: "Testpack Mapping",
      description:"Create a new test pack or modify exeisting testapck and execute them.",
      count: 100,
    },
    {
      title: "Testcase",
      description:"Create a new testcase or modify existing testcase and excute them.",
      testcaseCount: 50
    }
  ];

  return (
    <div className="AppContainer">
    <h1>Testpack Maintainence</h1>
    <div className="sceenButtons">
      <Button variant="contained" size="small" sx={"margin-right:1rem"} color="success" endIcon={<CachedIcon />}>Refresh</Button>
    </div>

    <div className="app-screen-content">
      <div className="app-cards-wrapper">
        {testPackDetailCards.map((card, index) =>(
          <TestPackCard key={index} card={card} />
        ))}
      </div>       
    </div>
  </div>
  )
}

export default TestpackContainer