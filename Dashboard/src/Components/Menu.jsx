import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px", marginLeft: "10px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link class="nav-link active" to={"/"}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link class="nav-link active" to={"/orders"}>
              Orders
            </Link>
          </li>
          <li>
            <Link class="nav-link active" to={"/holdings"}>
              Holdings
            </Link>
          </li>
          <li>
            {" "}
            <Link class="nav-link active" to={"/positions"}>
              Positions
            </Link>
          </li>
          <li>
            {" "}
            <Link class="nav-link active" to={"/funds"}>
              Funds
            </Link>
          </li>
          <li>
            {" "}
            <Link class="nav-link active" to={"/apps"}>
              Apps
            </Link>
          </li>
        </ul>
        |
        <hr />
      </div>
    </div>
  );
}

export default Menu;
