import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  Link1,
  Link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col p-5">
          <img
            src={imageURL}
            alt=""
            style={{ width: "40rem", marginRight: "90px" }}
          />
        </div>
        <div className="col" style={{ marginTop: "100px" }}>
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "1.8", fontSize: "1.3rem" }}>
            {productDescription}
          </p>
          <div className="mt-2">
            {Link1 && (
              <a href={Link1} style={{ textDecoration: "none" }}>
                {Link1}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}

            {Link2 && (
              <a
                href={Link2}
                style={{
                  marginLeft: "100px",
                  textDecoration: "none",
                }}
              >
                {Link2}{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src={googlePlay} alt="" />
            </a>
            <a href={appStore}>
              <img src={appStore} style={{ marginLeft: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
