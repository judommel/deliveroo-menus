import React from "react";

function MenuCard(props) {
  const { menu, onSelect } = props;

  return (
    <div
      id={menu.id}
      className="menu-card"
      onClick={e => {
        onSelect(e.currentTarget.id);
      }}
    >
      <div className="menu-info">
        {" "}
        <h3 value="ok">{menu.title}</h3>
        <div className="menu-description">
          <span>
            {menu.description.length > 54
              ? menu.description.slice(0, 55) + "..."
              : menu.description}
          </span>
          <span>
            {menu.description ? " - " + menu.price + " €" : menu.price + " €"}
          </span>
        </div>
        <div>
          {menu.popular && (
            <div className="popular">
              <i className="fas fa-star" />
              <span> Populaire</span>
            </div>
          )}
        </div>
      </div>
      {menu.picture && (
        <img className="menu-pic" src={menu.picture} alt={menu.title + "pic"} />
      )}
    </div>
  );
}

export default MenuCard;
