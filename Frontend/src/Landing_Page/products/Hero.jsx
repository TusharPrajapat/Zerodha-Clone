import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="mt-5 mb-5 p-5">
        <h1 className="text-muted">Zerodha Products</h1>
        <p className="mt-4 text-muted" style={{ fontSize: "1.7rem" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mt-4 text-muted" style={{ fontSize: "1.4rem" }}>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
