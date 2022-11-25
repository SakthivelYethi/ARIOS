import "./App.css";
import $ from "jquery";
import { useEffect } from "react"
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import UserPage from "./components/pages/admin/UserPage";
import ApplicationPage from "./components/pages/admin/ApplicationPage";
import ClientPage from "./components/pages/admin/ClientPage";
import LearnPage from "./components/pages/admin/LearnPage";
import FunctionPage from "./components/pages/function/FunctionPage";
import TestStepPage from "./components/pages/test/TestStepPage";
import TestCasePage from "./components/pages/test/TestCasePage";
import TestPackPage from "./components/pages/test/TestPackPage";
import ExecutionPage from "./components/pages/execution/ExecutionPage";
import EmailPage from "./components/pages/settings/EmailPage";
import JiraPage from "./components/pages/settings/JiraPage";
import UserReportPage from "./components/pages/report/UserReportPage";
import PeriodicReportPage from "./components/pages/report/PeriodicReportPage";
import RunReportPage from "./components/pages/report/RunReportPage";
import UserDetailPage from "./components/pages/admin/detail/UserDetailPage";
import ApplicationDetailPage from "./components/pages/admin/detail/ApplicationDetailPage";
import ClientDetailPage from "./components/pages/admin/detail/ClientDetailPage";
import LearnDetailPage from "./components/pages/admin/detail/LearnDetailPage";

function App() {

  useEffect(() => {
    try {
      const subMenu = window.location.pathname;
      const mainMenu = subMenu.split("/")[1];
      var element = $("[href='/"+mainMenu+"']").get(0);
      element.setAttribute("class", "menu-item active");
      element.nextElementSibling.setAttribute("class", "sub-menu active");
      $("[href='"+subMenu+"']").get(0).setAttribute("class", "menu-item active");
    } catch (error) { console.log(error) }
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route index path="/" element={ <DashboardPage />} />

          <Route path="/admin/applications" element={ <ApplicationPage />} />
              <Route path="/admin/newapplication" element={ <ApplicationDetailPage />} />
          <Route path="/admin/users" element={ <UserPage />} />
              <Route path="/admin/newuser" element={ <UserDetailPage />} />
          <Route path="/admin/clients" element={ <ClientPage />} />
              <Route path="/admin/newclient" element={ <ClientDetailPage />} />
          <Route path="/admin/learn" element={ <LearnPage />} />
            <Route path="/admin/learndetails" element={ <LearnDetailPage />} />
         
          <Route index path="/functions" element={ <FunctionPage />} />

          <Route path="/test/teststep" element={ <TestStepPage />} />
          <Route path="/test/testcase" element={ <TestCasePage />} />
          <Route path="/test/testpack" element={ <TestPackPage />} />

          <Route path="/execution" element={ <ExecutionPage />} />

          <Route path="/settings/email" element={ <EmailPage />} />
          <Route path="/settings/jira" element={ <JiraPage />} />

          <Route path="/reports/user" element={ <UserReportPage />} />
          <Route path="/reports/periodic" element={ <PeriodicReportPage />} />
          <Route path="/reports/run" element={ <RunReportPage />} />


          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
