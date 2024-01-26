//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/globalStyle.scss";

//Render
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
