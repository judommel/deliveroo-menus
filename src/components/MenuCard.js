import React from "react";

function MenuCard(props) {
  const { menu } = props;

  //   const menu = {
  //     id: "1519055545-88",
  //     title: "Brunch authentique 1 personne",
  //     description:
  //       "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
  //     price: "25.00",
  //     picture: "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
  //     popular: true
  //   };

  return (
    <div className="menu-card">
      <div className="menu-info">
        {" "}
        <h3>{menu.title}</h3>
        <div className="menu-description">{menu.description}</div>
        <div>{menu.price}</div>{" "}
      </div>
      <img className="menu-pic" src={menu.picture} alt={menu.title + "pic"} />
    </div>
  );
}

export default MenuCard;
