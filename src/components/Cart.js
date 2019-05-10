import React from "react";
import CartItems from "./CardItems";
import CartTotal from "./CartTotal";

function Cart(props) {
  const { cart, pos, add, del } = props;

  const cartRender = () => {
    let cartArray = cart
      .filter(prod => prod.quantity > 0)
      .map(prod => (
        <CartItems
          id={prod.id}
          add={e => add(e)}
          del={e => del(e)}
          price={(prod.price * prod.quantity).toFixed(2)}
          quantity={prod.quantity}
          item={
            prod.title.length > 18
              ? prod.title.slice(0, 15) + "..."
              : prod.title
          }
        />
      ));

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }

    if (cart.length === 0 || total === 0) {
      return "Votre panier est vide";
    }

    total = total.toFixed(2);

    return (
      <div>
        {cartArray}
        <CartTotal total={total} />
      </div>
    );
  };

  return (
    <div className={pos}>
      <button className="cart-button">Valider Mon panier</button>

      <div className="cart-content">
        {cartRender()}
        {/* {cartContent} */}
      </div>
    </div>
  );
}

export default Cart;
