import React from "react";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";

function CartItems(props) {
  const { quantity, item, price, id, add, del } = props;

  return (
    <li className="cart-items">
      <div className="item">
        <img
          id={id}
          onClick={e => del(e.target.id)}
          className="quant-icon"
          alt="- icon"
          src={minus}
        />
        {" " + quantity + " "}
        <img
          className="quant-icon"
          alt="+ icon"
          src={plus}
          id={id}
          onClick={e => add(e.target.id)}
        />
      </div>{" "}
      <div className="item">{item}</div>
      <div className="item">{price + " €"}</div>
    </li>
  );
}

export default CartItems;
