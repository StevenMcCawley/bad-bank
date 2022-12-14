import { React } from "react";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  function buttonClicked() {
    console.log("hello fron the button click");
    console.log(email);
    console.log(password);

    fetch(
      `/login?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("response:", response);
        clearForm();
      });
  }

    return (
      <h3 className="container py-3 text-muted">
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
      {/* Submit */}
      <div className="row m-auto">
        <button className="btn btn-primary col-12" onClick={buttonClicked}>
          Log in
        </button>
      </div>
    </h3>
    );
  }