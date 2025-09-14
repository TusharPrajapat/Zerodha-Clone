import React from "react";

function WatchList() {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        {/* <h1>Watchlist</h1> */}
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        ></input>
        <span className="counts"> 9 / 50</span>
      </div>
      <ul className="list"></ul>
    </div>
  );
}

export default WatchList;
