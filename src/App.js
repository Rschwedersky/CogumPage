/* import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Reset from "./Pages/Reset/Reset";
import Dashboard from "./Pages/Dashboard/Dashboard";

import { CogumsProvider } from './context/cogums/CogumsProvider';
import { GlobalStyle } from './themes/GlobalStyles';
import { Home } from "./Pages/Home/Home";


function App() {
  return (
  <>
      <GlobalStyle/>
      <CogumsProvider>
          <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
        </CogumsProvider> 
  </>
      
  );
}

export default App */;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import routes from "./routes"
import Layout from "./components/Layout"
import Page404 from "./Pages/Page404"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App