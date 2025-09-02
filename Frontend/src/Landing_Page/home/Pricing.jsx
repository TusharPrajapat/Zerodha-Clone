import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-5 ">
          <h1>Unbeatable pricing</h1>
          <p className="mt-5 fs-5 text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row border">
            <div className="col border p-4">
              <h1>
                <i class="fa fa-inr" aria-hidden="true"></i>0
              </h1>
              <p>Free account opening</p>
            </div>
            <div className="col border p-4">
              <h2>
                <i class="fa fa-inr" aria-hidden="true"></i>0
              </h2>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-4">
              <h2>
                <i class="fa fa-inr" aria-hidden="true"></i>20
              </h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
