//Imports
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HomePage, NotFoundPage, HousingPage, AboutPage } from "../../pages";
import Paths from "../../types/paths";
import Header from "../header/Header";
import Footer from "../Footer";
import style from "./style.module.scss";
import useApi from "../../utils/hooks/useApi";
import { loadHousings } from "../../utils/redux_toolkit/slices/housingsSlice";
import { useEffect } from "react";

//Exports
export default function App() {
    const dispatch = useDispatch();
    const { data, isLoading } = useApi();
    useEffect(() => {
        if (isLoading === false) {
            dispatch(loadHousings(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <>
            <div className={style.paddedSections}>
                <Header />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route
                        path={Paths.housing + Paths.splat}
                        element={<HousingPage />}
                    />
                    <Route path={Paths.about} element={<AboutPage />} />
                    <Route path={Paths.splat} element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
