import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="text-muted">Charges</h1>
        <p className="fs-3 mt-1 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row" style={{ marginTop: "15rem" }}>
        <div className="col p-3 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "20rem" }} />
          <h2 className="text-muted">Free equity delivery</h2>
          <p className="mt-5 text-muted" style={{ fontSize: "21px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-3 text-center">
          <img src="media/images/other-trades.svg" style={{ width: "20rem" }} />
          <h2 className="text-muted">Intraday and F&O trades</h2>
          <p className="mt-5 text-muted" style={{ fontSize: "21px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-3 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "20rem" }} />
          <h2 className="text-muted">Free direct MF</h2>
          <p className="mt-5 text-muted" style={{ fontSize: "21px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
