import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2">Trust with confidence</h1>
          <div className="mt-5">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="fs-5 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mt-5">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="fs-5 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="">Our philosophies.</a>
            </p>
          </div>
          <div className="mt-5">
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="fs-5 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center mt-5">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
