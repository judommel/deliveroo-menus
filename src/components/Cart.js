import React from "react";

function Cart(props) {
  const { cartContent } = props;

  return (
    <div className="cart">
      <button>Valider Mon panier</button>
      <div>{cartContent}</div>
    </div>
  );
}

export default Cart;
