import React from "react";

function Cart(props) {
  const { cartContent, onScroll } = props;

  return (
    <div className="cart" onScroll={() => onScroll()}>
      <button className="cart-button">Valider Mon panier</button>
      <div className="cart-content">{cartContent}</div>
    </div>
  );
}

export default Cart;
