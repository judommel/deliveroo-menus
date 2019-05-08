import React from "react";
import MenuList from "./MenuList";

function Content(props) {
  const { mealList } = props;

  let keys = Object.keys(mealList);

  let list = [];

  for (let i = 0; i < keys.length; i++) {
    list.push(<MenuList title={keys[i]} meal={mealList.keys[i]} />);
  }

  return <div>{list}</div>;
}

export default Content;
