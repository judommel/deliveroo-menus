import React, { useState } from "react";

function Nav(props) {
  const { mealList, pos } = props;

  const [hide, setHide] = useState(false);

  let keys = Object.keys(mealList);

  let list = keys.slice(0, 4).map((meal, index) => (
    <li key={index} className="main-nav">
      <a href={"#" + meal}>{meal}</a>
    </li>
  ));

  let bList = keys
    .filter(key => mealList[key].length > 0)
    .slice(4)
    .map(meal => (
      <li>
        <a href={"#" + meal}>{meal}</a>
      </li>
    ));

  return (
    <div className={pos}>
      <div className="container-content">
        <div className="nav-wrapper ">
          <ul className="nav">{list}</ul>{" "}
          <div className="plus-nav">
            <div className="plus" onClick={() => setHide(!hide)}>
              Plus <i className="fas fa-chevron-down" />
            </div>{" "}
            <ul className={hide ? "vertical-nav" : ""}> {hide && bList}</ul>{" "}
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Nav;
