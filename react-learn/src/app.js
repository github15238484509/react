import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    Outlet,
    Link
} from "react-router-dom";


function CompA() {
    return (
        <>
            <h2>CompA</h2>
            <Link to={"expenses"}>expenses</Link>
            <Outlet />
        </>
    );
}
function CompB() {
    return <h2>CompB</h2>;
}
function CompC() {
    return <h2>CompC</h2>;
}
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/a" element={<CompA />} >
                    <Route path="expenses" element={<CompC />} >
                    </Route>
                </Route>
                <Route path="/a/b" element={<CompB />} >
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

