import React from "react";

function Team() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center fs-2 text-muted">People</h1>
      </div>
      <div
        className="row p-5 mt-5 text-muted"
        style={{
          lineHeight: "1.8",
          fontSize: "1.2rem",
        }}
      >
        <div className="col-5 p-4 text-center text-muted">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "80%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6 className="mt-4">Founder, CEO</h6>
        </div>
        <div className="col p-4" style={{ fontSize: "21px", padding: "100px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
