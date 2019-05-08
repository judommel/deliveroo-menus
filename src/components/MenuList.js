import React from "react";
import MenuCard from "./MenuCard";

function MenuList(props) {
  const { meal, title } = props;

  let list = meal.map((menu, index) => <MenuCard menu={menu} />);

  return (
    <div className="menu-list" id={title}>
      <h2>{title}</h2>
      <div className="menu-items"> {list}</div>
    </div>
  );
}

export default MenuList;
