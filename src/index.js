// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";

// Styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import {Home} from "./pages/Home"
import {Deposit} from "./pages/Deposit"
import {Withdraw} from "./pages/Withdraw"
import {Login} from "./pages/Login"
import {CreateAccount} from "./pages/CreateAccount"

// Components
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </HashRouter>
  </React.StrictMode>
);