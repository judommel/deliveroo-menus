import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

function Cart(props) {
  const { cart, pos, add, del, cartbutton } = props;

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
      return <div className="empty-cart">Votre panier est vide</div>;
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
      <button className={cartbutton}>Valider Mon panier</button>

      <div className="cart-content">{cartRender()}</div>
    </div>
  );
}

export default Cart;
