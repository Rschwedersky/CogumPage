import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

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

export default App;