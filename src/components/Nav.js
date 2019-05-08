import React from "react";

function Nav(props) {
  const { mealList } = props;

  let keys = Object.keys(mealList);

  let list = keys.slice(0, 4).map(meal => (
    <li>
      <a href={"#" + meal}>{meal}</a>
    </li>
  ));

  let bList = keys.slice(4).map(meal => (
    <li>
      <a href={"#" + meal}>{meal}</a>
    </li>
  ));

  return (
    <div className="container-nav">
      <ul className="nav">
        {list}
        <li>
          <a href="#">Plus</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;