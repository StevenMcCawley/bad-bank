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
import {Home} from "./pages/Home.js"
import {Deposit} from "./pages/Deposit.js"
import {Withdraw} from "./pages/Withdraw.js"
import {Login} from "./pages/Login.js"
import {CreateAccount} from "./pages/CreateAccount.js"

// Components
import Navbar from './components/Navbar.js';

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