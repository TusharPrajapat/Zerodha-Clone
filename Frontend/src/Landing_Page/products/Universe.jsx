import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <div className="mt-5 mb-5 p-5">
        <p style={{ margin: "30px 0 130px 0", fontSize: "1.7rem" }}>
          Want to know more about our technology stack? Check out the
          <a href="">Zerodha.tech</a> blog.
        </p>
        <h2 className="text-muted">The Zerodha Universe</h2>
        <p className="mt-4 text-muted" style={{ fontSize: "1.4rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col p-3">
          <img
            className=""
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "16rem" }}
          />
          <p className="text-muted p-5 ">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "20rem" }}
          />
          <p className="text-muted p-5" style={{ marginTop: "2px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/images/goldenpiLogo.png" style={{ width: "15rem" }} />
          <p className="text-muted p-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col p-3">
          <img src="media/images/streakLogo.png" style={{ width: "15rem" }} />
          <p className="text-muted mt-4 p-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "15rem" }}
          />
          <p className="text-muted mt-4 p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/images/dittoLogo.png" style={{ width: "11rem" }} />
          <p className="text-muted mt-4 p-2">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary fs-5 mt-5 mb-5"
        style={{ width: "18%", margin: "0 auto" }}
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
