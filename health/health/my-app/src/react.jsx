import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Email from "./auth/email";
import Verification from "./auth/otp";
import Home from "./home/home";
import App from "./home/home2";
import Calendar from "./home/calendar";
import Profile from "./profile/profile";


function Proyect() {
    return ( <>
    <Routes>
        <Route path="/" element={<> <Profile/> </>}/>
        <Route path="/" element={<> </>}/>
    </Routes>
    </> );
}

export default Proyect;