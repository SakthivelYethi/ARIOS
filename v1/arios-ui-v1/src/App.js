import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TestpackContainer from './components/Testpacks/TestpackContainer';
import Sidebar from './components/sidebar/Sidebar';
import UserContainer from './components/Users/UserContainer';
import ApplicationContainer from './components/AUT/ApplicationContainer';
import FunctionsContainer from './components/Functions/FunctionsContainer';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route index element={<Dashboard />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users" element={<UserContainer />}></Route>
              <Route path="/testpack" element={<TestpackContainer />}></Route>
              <Route path="/application" element={<ApplicationContainer />}></Route>
              <Route path="/functions" element={<FunctionsContainer />}></Route>
            </Routes>  
            <div>Notifications</div>  
          </BrowserRouter> 
        </div>
    </div>
  );
}

export default App;