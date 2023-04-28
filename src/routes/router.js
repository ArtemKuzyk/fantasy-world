import { Routes, Route } from "react-router-dom";
import { AdventurePage, Layout, StartPage } from "./index";

export default function AppRoutes(){

    return(
        <>
            <Routes>
                {
                    <Route path="/" element={<Layout />}>
                        <Route index element={<StartPage />}></Route>
                        <Route path="/the-adventure" element={<AdventurePage />}></Route>
                    </Route>
                }
            </Routes>
        </>
    );
}