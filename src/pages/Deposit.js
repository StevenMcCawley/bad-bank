import { React } from "react";
import { useState } from "react";

export function Deposit() {
  const [dollarAmount, setdollarAmount] = useState(0);

  function buttonClicked(params) {
    console.log("hello fron the button click");
    console.log(dollarAmount);

    var username = "joe"

    fetch(
      `/deposit?username=${username}&dollarAmount=${dollarAmount}`
    );

    clearForm()
  }

  const clearForm = () => {
    setdollarAmount(0);
  };

  return (
    <h3 className="container py-3 text-muted">
      {/*  Dollar Amount */}
      <label htmlFor="dollar-amount">Deposit Dollar Amount</label>
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
            id="dollar-amount"
            onChange={(e) => setdollarAmount(e.currentTarget.value)}
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
      {/* Submit */}
      <div className="row m-auto">
        <button className="btn btn-primary col-12" onClick={buttonClicked}>
          Deposit
        </button>
      </div>
    </h3>
  );
}
