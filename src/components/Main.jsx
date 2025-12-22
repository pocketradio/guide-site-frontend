import "../tailwind.css";
import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar.jsx";
import Title from "./Title.jsx";
import { PageProvider } from "../contexts/PageProvider.jsx";

export default function Main() {
    return (
        <PageProvider>
            <div className="flex flex-col h-full w-full box-border items-center custom-background">
                <Title></Title>
                <div className="h-full w-full box-border flex items-center custom-background place-content-center border-t-4 border-(--outline)">
                    <Navbar></Navbar>
                    <Outlet />
                </div>
            </div>
        </PageProvider>
    );
}
