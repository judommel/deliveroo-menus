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
    <div>
      <div className={pos}>
        <ul className="nav container-content">
          {list}
          <li className="plus-nav" onClick={() => setHide(!hide)}>
            Plus +
          </li>
        </ul>
      </div>
      <ul className={hide ? "vertical-nav" : ""}> {hide && bList}</ul>
    </div>
  );
}

export default Nav;
