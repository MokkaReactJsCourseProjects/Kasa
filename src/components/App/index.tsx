//Imports
import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, HousingPage, AboutPage } from "../../pages";
import Paths from "../../types/paths";
import Header from "../header/Header";
import Footer from "../Footer";

//Exports
export default function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route
                        path={Paths.housing + Paths.splat}
                        element={<HousingPage />}
                    />
                    <Route path={Paths.about} element={<AboutPage />} />
                    <Route path={Paths.splat} element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
