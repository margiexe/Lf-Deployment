import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useNavigate, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./Layout";
import { Navbar } from "react-bootstrap";
import { Startup } from "./components/Startup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import StartupList from "./StartupList";
import User from "./components/User";
import Portfolio from "./Pages/Portfolio";
import StartupPortfolio from "./Pages/StartupPortfolio";
import LayoutPublic from "./LayoutPublic";
import LayoutStartup from './LayoutStartup';
import Domain from "./components/Investor/Domain";
import InvestorPortfolio from "./Pages/InvestorPortfolio";

function App() {
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `./components/login`;
  //   navigate(path);
  // };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerStartup" element={<Register />} />
          <Route path="/startuplist" element={<StartupList />} />
          <Route path="/user" element={<User />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/LayoutPublic" element={<LayoutPublic />} />
          <Route path="/LayoutStartup" element={<LayoutStartup />} />
          <Route path="/Domain" element={<Domain />} />
          <Route path="/StartupPortfolio" element={<StartupPortfolio />} />
          <Route path="/InvestorPortfolio" element={<InvestorPortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
