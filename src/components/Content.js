import React from "react";
import MenuList from "./MenuList";

function Content(props) {
  const { mealList, onSelect } = props;

  let keys = Object.keys(mealList);

  let list = keys
    .filter(key => mealList[key].length > 0)
    .map((key, index) => {
      return (
        <MenuList
          key={index}
          title={key}
          meal={mealList[key]}
          onSelect={e => onSelect(e)}
        />
      );
    });

  return <div className="container-content">{list}</div>;
}

export default Content;
