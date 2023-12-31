import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Jobhunting from "./pages/jobhunting/jobhunting";
import Learning from "./pages/learning/learning";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";
import Auth from "./pages/auth/Auth";
import CompanyInfo from "./pages/CompanyInfo/CompanyInfo";
import Inhousedevelopmentcompany from "./pages/Inhousedevelopmentcompany/Inhousedevelopmentcompany";
import Preparation from "./pages/preparation/preparation";
import Contractdevelopmentcompany from "./pages/Contractdevelopmentcompany/Contractdevelopmentcompany";
import Sescompany from "./pages/Sescompany/Sescompany";
import CompanyRoom from "./pages/CompanyRoom/CompanyRoom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/jobhunting" element={user ? <Jobhunting /> : <Login />} />
        <Route path="/learning" element={user ? <Learning /> : <Login />} />
        <Route path="/auth" element={user ? <Auth /> : <Login />} />
        <Route path="/CompanyInfo" element={user ? <CompanyInfo /> : <Login />} />
        <Route path="/preparation" element={user ? <Preparation /> : <Login />} />
        <Route path="/inhouse" element={user ? <Inhousedevelopmentcompany /> : <Login />} />
        <Route path="/outhouse" element={user ? <Contractdevelopmentcompany /> : <Login />} />
        <Route path="/ses" element={user ? <Sescompany /> : <Login />} />
        <Route path="/CompanyRoom/:companyId" element={user ? <CompanyRoom /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
