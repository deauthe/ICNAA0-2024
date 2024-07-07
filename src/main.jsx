import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./components/Register.jsx";
import AccomodationPage from "./pages/Accomodation.jsx";
import AttractionPage from "./pages/Attraction.jsx";
import SpeakersPage from "./pages/Speakers.jsx";
import PublicationsPage from "./pages/Publications.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/icnaao24.github.io" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="accomodation" element={<AccomodationPage />} />
            <Route path="nearby-attraction" element={<AttractionPage />} />
            <Route path="speakers" element={<SpeakersPage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="*" element={<Home />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
