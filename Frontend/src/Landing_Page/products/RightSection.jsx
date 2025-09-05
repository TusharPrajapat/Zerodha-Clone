import React from "react";

function RightSection({ imageURL, productName, productDescription, Link1 }) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col" style={{ marginTop: "100px" }}>
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "1.3rem" }}>
            {productDescription}
          </p>
          <div className="mt-2">
            <a href={Link1} style={{ textDecoration: "none" }}>
              {Link1} <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col p-5">
          <img
            src={imageURL}
            alt=""
            style={{ width: "40rem", marginRight: "90px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
