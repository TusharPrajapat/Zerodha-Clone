import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row  " id="supportWrapper">
        <div className="col-7 p-5 ">
          <h3 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            className="mb-4"
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />
          <br></br>
          <a href="" style={{ marginRight: "15px" }}>
            Track Account Opening
          </a>
          <a href="" style={{ marginRight: "15px" }}>
            Track Segment Activation
          </a>
          <a href="" style={{ marginRight: "15px" }}>
            Intraday
          </a>
          <a href="" style={{ marginRight: "15px" }}>
            Margins
          </a>
          <br></br>
          <a href="" style={{ marginRight: "15px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col p-5" style={{ marginLeft: "" }}>
          <h3 className="fs-3">Featured</h3>
          <ol>
            <li>
              <a href="" className="d-block mb-2">
                Current TakeOve and Delistings
              </a>
            </li>
            <li>
              <a href="">Latest Intraday leverages</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
