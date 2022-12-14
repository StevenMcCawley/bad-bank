// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

// Pages
import { Home } from "./pages/Home.js";
import { Deposit } from "./pages/Deposit.js";
import { Withdraw } from "./pages/Withdraw.js";
import { Login } from "./pages/Login.js";
import { CreateAccount } from "./pages/CreateAccount.js";

// Components
import Navbar from "./components/Navbar.js";
import UserContext from "./components/Context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <UserContext.Provider
        value={{
          currentUser: null,
        }}
      >
        <Routes>
          <Route
            path="/"
            exact
            element={<Home currentUser={UserContext.currentUser} />}
          />
          <Route
            path="/deposit"
            element={<Deposit currentUser={UserContext.currentUser} />}
          />
          <Route
            path="/withdraw"
            element={<Withdraw currentUser={UserContext.currentUser} />}
          />
          <Route
            path="/login"
            element={<Login currentUser={UserContext.currentUser} />}
          />
          <Route
            path="/createAccount"
            element={<CreateAccount currentUser={UserContext.currentUser} />}
          />
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  </React.StrictMode>
);
