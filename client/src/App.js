// import HeaderLogo from "./HeaderLogo";
// import UserProfileName from "./component/UserInfo";
// import { FaUserCircle } from "react-icons/fa";
// import HeaderPic from "./Header-pic";
// import { Header } from "./component/Header";

import Avatar from "./components/Avatar";
import { CardTeachers } from "./components/CardTeachers";
import PopularTeachers from "./components/PopularTeachers";
import LandingPage from "./page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./page/Login";
import { SignUp } from "./page/SignUp.jsx";
import { CiSignpostDuo1 } from "react-icons/ci";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
