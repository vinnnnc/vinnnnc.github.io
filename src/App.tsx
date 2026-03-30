import { Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav";
import ResumeFloat from "./components/ResumeFloat";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <AppNav />
            <ResumeFloat />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
