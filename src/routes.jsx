import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home/home.jsx"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes