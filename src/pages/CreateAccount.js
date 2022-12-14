import { React } from "react";
import { useState } from "react";
// import { useContext } from "react";
// import UserContext from "../components/Context.js";

export function CreateAccount(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dollarAmount, setDollarAmount] = useState(0);

  // const [context, setContext] = useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      alert(`${label} cannot be blank`);
      return false;
    }
    if (label === "password" && password.length < 8) {
      if (password.length < 8) {
        alert(`password cannot be less than 8 characters`);
        return false;
      }
      if (password !== confirmPassword) {
        alert(`passwords must match`);
        return false;
      }
    }
    return true;
  };

  function buttonClicked() {
    console.log("hello fron the button click");
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(dollarAmount);
    console.log("props:", props);

    if (
      !validate(username, "username") ||
      !validate(email, "email") ||
      !validate(password, "password")
    ) {
      return;
    }

    fetch(
      `/createAccount?username=${username}&email=${email}&password=${password}&dollarAmount=${dollarAmount}`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("response:", response);
        clearForm();
      });

    // setCurrentUser(username, email, password, dollarAmount);
  }

  // const setCurrentUser = (username, email, password, dollarAmount) => {
  //   context.currentUser = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     dollarAmount: dollarAmount,
  //   };
  // };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDollarAmount(0);
  };

  return (
    <h3 className="container py-3 text-muted">
      {/* UserName */}
      <label htmlFor="username">Username</label>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            aria-label="Username"
            value={username}
            placeholder="Joe Schmoe"
            className="form-control"
            id="username"
            onChange={(e) => setUsername(e.currentTarget.value)}
          ></input>
        </div>
      </div>
      {/* Email Address */}
      <label htmlFor="email-address">Email Address</label>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Email Address"
            value={email}
            placeholder="JoeSchmoe@moe.com"
            id="email-address"
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
        </div>
      </div>
      {/* Password */}
      <label htmlFor="password">Password</label>
      <div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            aria-label="Password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></input>
        </div>
      </div>
      {/* Confirm Password */}
      <label htmlFor="confirm-password">Confirm Password</label>
      <div>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            aria-label="Confirm Password"
            value={confirmPassword}
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          ></input>
        </div>
      </div>
      {/* Starting Dollar Amount */}
      <label htmlFor="starting-dollar-amount">Starting Dollar Amount</label>
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            value={dollarAmount}
            placeholder="100"
            id="starting-dollar-amount"
            onChange={(e) => setDollarAmount(e.currentTarget.value)}
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
      {/* Submit */}
      <div className="row m-auto">
        <button className="btn btn-primary col-12" onClick={buttonClicked}>
          Create Account
        </button>
      </div>
    </h3>
  );
}
