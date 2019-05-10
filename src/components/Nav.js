import React from "react";

function Nav(props) {
  const { mealList, pos } = props;

  let keys = Object.keys(mealList);

  let list = keys.slice(0, 4).map((meal, index) => (
    <li key={index}>
      <a href={"#" + meal}>{meal}</a>
    </li>
  ));

  // let bList = keys.slice(4).map(meal => (
  //   <li>
  //     <a href={"#" + meal}>{meal}</a>
  //   </li>
  // ));

  return (
    <div className={pos}>
      <ul className="nav container-content">
        {list}
        <li>
          <a href="#Brunchs">Plus +</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
