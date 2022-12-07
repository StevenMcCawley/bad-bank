export function Home() {
  return (
    <div className="container py-3 text-center">
      <h1>Welcome to Steven McCawley's Bad Bank!</h1>
      <h3 className="text-muted">
        This bank is bad because it does not offer security. No real money can be
        stored here, and no fake money can be spent at businesses.
      </h3>
      <h3 className="text-muted py-3">
        <div className="text-start py-3">
          <span>
            All users created are stored in a database. This includes...
          </span>
          <ul className="list-unstyled">
            <li>Their username</li>
            <li>Their email</li>
            <li>Their password</li>
            <li>Their dollar amount</li>
          </ul>
        </div>
        <div className="row text-center py-3">
          <div className="col">
          </div>
          <div className="col-auto">
            <span>Want to get started?</span>
            <div>
              <a href="#/createaccount">Create an Account</a>
              <br></br>
              <div className="row">
                <div className="col">
                  <hr></hr>
                </div>
                <div className="col-auto">or</div>
                <div className="col">
                  <hr></hr>
                </div>
              </div>
              <a href="#/login">Log in</a>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="text-end py-3">
          <span>
            Already have an account and want to make some money moves?
          </span>
          <ul className="list-unstyled">
            <li>
              <a href="#/deposit">Depost</a>
            </li>
            <li>
              <a href="#/withdraw">Withdraw</a>
            </li>
          </ul>
        </div>
      </h3>
    </div>
  );
}
