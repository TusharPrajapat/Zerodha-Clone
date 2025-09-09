import React from "react";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

function Dashboard() {
  return (
    <>
      <Summary />
      <Orders />
      <Holdings />
      <Positions />
      <Funds />
      <Apps />
    </>
  );
}

export default Dashboard;
