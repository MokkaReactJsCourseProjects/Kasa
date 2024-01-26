//Imports
import { Link, Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, HousingPage } from "../../pages";
import Paths from "../../types/paths";

//Exports
export default function App() {
    return (
        <>
            <header>
                <Link to={Paths.home}>Accueil</Link>
                <Link to={Paths.about}>À propos</Link>
            </header>
            <main>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route
                        path={Paths.housing + Paths.splat}
                        element={<HousingPage />}
                    />
                    <Route path={Paths.about} element={<HousingPage />} />
                    <Route path={Paths.splat} element={<NotFoundPage />} />
                </Routes>
            </main>
            <footer>© 2020 Kasa. All rights reserved</footer>
        </>
    );
}
