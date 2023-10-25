import { Outlet } from "react-router-dom"

import Topbar from "./Topbar"
import Footer from "./Footer"
import Loader from "./Loader"
import { Suspense } from "react"
import { CogumsProvider } from './../context/cogums/CogumsProvider';

export default function Layout() {
    return (
        <>
        <CogumsProvider>
            <Topbar/>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer/>
            </CogumsProvider>
        </>
    )
}