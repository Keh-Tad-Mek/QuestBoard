import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home/home.jsx"
import SignUp from "./Auth/signup.jsx";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes