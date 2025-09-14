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

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

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
              <span
                className={selectedMenu === 0 ? activeMenuClass : menuClass}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link active"
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <span
                className={selectedMenu === 1 ? activeMenuClass : menuClass}
              >
                Orders
              </span>
            </Link>
          </li>
          <li>
            <Link
              class="nav-link active"
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <span
                className={selectedMenu === 2 ? activeMenuClass : menuClass}
              >
                Holdings
              </span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <span
                className={selectedMenu === 3 ? activeMenuClass : menuClass}
              >
                Positions
              </span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <span
                className={selectedMenu === 4 ? activeMenuClass : menuClass}
              >
                Funds
              </span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              class="nav-link active"
              to={"/apps"}
              onClick={() => handleMenuClick(5)}
            >
              <span
                className={selectedMenu === 5 ? activeMenuClass : menuClass}
              >
                Apps
              </span>
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
