import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import sizeConfigs from "./configs/sizeConfigs";
import { routes } from "./routes";
import "./assests/App.css"
import UserDetails from "./pages/administrator/user/UserDetails";
import { Toolbar } from "@mui/material";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
