import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropDownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px", marginLeft: "10px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              class="nav-link active"
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              class="nav-link active"
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              class="nav-link active"
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              Holdings
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              Positions
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              Funds
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
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
