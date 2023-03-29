
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard, Login, Signup, LatestReleases, Populars, Logout, BetterMovies, Search } from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="latestReleases" element={<LatestReleases />} />
                    <Route path="/populars" element={<Populars />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="betterMovies" element={<BetterMovies />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;