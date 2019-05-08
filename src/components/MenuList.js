import React from "react";
import MenuCard from "./MenuCard";

function MenuList(props) {
  const { meal, title } = props;

  let list = meal.map((menu, index) => <MenuCard menu={menu} />);

  return (
    <div className="menu-list">
      <h2>{title}</h2>
      {list}
    </div>
  );
}

export default MenuList;
