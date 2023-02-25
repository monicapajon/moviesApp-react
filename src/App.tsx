
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Categories, Dashboard, Login, Signup, Users } from "./pages";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/users" element={<Users />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;