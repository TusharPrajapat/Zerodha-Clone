import React from "react";

function OpenAccount() {
  return (
    <div className="container mb-10">
      <div className="row text-center">
        <h1 className="mt-5 text-muted">Open a Zerodha account</h1>
        <p className="fs-4 mt-5 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
