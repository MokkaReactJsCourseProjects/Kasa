//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/globalStyle.scss";
import { store } from "./utils/redux_toolkit";
import { Provider } from "react-redux";

//Render
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
