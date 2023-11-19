import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../Pages/Home"))
const Login = React.lazy(() => import("../Pages/Login"))
const Register = React.lazy(() => import("../Pages/Register"))
const Reset = React.lazy(() => import("../Pages/Reset"))
const Dashboard = React.lazy(() => import("../Pages/Dashboard"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.LOGIN, element: <Login /> },
    { path: PathConstants.REGISTER, element: <Register /> },
    { path: PathConstants.RESET, element: <Reset /> },
    { path: PathConstants.DASHBOARD, element: <Dashboard /> }
]

export default routes