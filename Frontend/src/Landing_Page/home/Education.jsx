import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-6 ">
          <h1 className="fs-2 text-muted">Free and open market education</h1>
          <p className="mt-5 fs-5 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5 fs-5 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
