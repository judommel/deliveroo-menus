import React from "react";

function CartItems(props) {
  const { quantity, item, price, id, add, del } = props;

  return (
    <li className="cart-items">
      <button id={id} onClick={e => del(e.target.id)}>
        -
      </button>
      {quantity}
      <button id={id} onClick={e => add(e.target.id)}>
        +
      </button>
      {item}
      {price + " €"}
    </li>
  );
}

export default CartItems;
