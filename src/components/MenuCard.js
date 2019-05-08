import React from "react";

function MenuCard(props) {
  const { menu } = props;

  return (
    <div className="menu-card">
      <div className="menu-info">
        {" "}
        <h3>{menu.title}</h3>
        <div className="menu-description">
          <div>{menu.description}</div>
        </div>
        <div>{menu.price + " €"}</div>
        <div>
          {" "}
          {menu.popular && <div className="popular"> ⭐️ Populaire</div>}
        </div>
      </div>
      {menu.picture && (
        <img className="menu-pic" src={menu.picture} alt={menu.title + "pic"} />
      )}
    </div>
  );
}

export default MenuCard;
