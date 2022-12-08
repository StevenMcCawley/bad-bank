import { useEffect } from "react";

export function CreateAccount() {

  useEffect(() => {
    console.log("in useEffect in createAccount");
    // return () => { console.log("in useEffect in createAccount return statement"); }
    var users;
    fetch("http://localhost:3001/pages/createAccount")
      .then((res) => {
        console.log("res:", res);
        res.json();
      })
      .then((usersFromRes) => {
        console.log("usersFromRes:", usersFromRes);
        users = usersFromRes;
        console.log("users:", users);
      });
      return () => buttonClicked();
  }, []);

  function buttonClicked(params) {
    console.log("hello");
  }

  return (
    <h3 className="container py-3 text-muted">
      {/* UserName */}
      <label htmlFor="username">Username</label>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            placeholder="Joe Schmoe"
            id="username"
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
            placeholder="JoeSchmoe@moe.com"
            id="email-address"
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
            id="password"
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
            id="confirm-password"
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
            placeholder="100"
            id="starting-dollar-amount"
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
      {/* Submit */}
      <div className="row m-auto">
        <button className="btn btn-primary col-12" onClick={buttonClicked}>Create Account</button>
      </div>
    </h3>
  );
}
