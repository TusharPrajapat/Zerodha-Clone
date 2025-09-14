import React from "react";

function Summary() {
  return (
    <div className="Summary-container">
      <div className="username">
        <h6>Hi User!</h6>
        <hr className="divider" />
      </div>
      <div className="section">
        <p>Equity</p>
        <div className="data">
          <div className="first">
            {" "}
            <h2>3.74k</h2>
            <p>Margin available</p>
          </div>
          {/* <hr /> */}

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening Balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      <div>
        <p className="section">Holdings(13)</p>
        <div className="data">
          <div className="first">
            <div className="profit">
              <h2>
                1.55k<small>+5.20%</small>
              </h2>
            </div>{" "}
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43K</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
