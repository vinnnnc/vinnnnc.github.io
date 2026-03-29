import { Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <AppNav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
