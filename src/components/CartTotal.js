import React from "react";

function CartTotal(props) {
  const { total } = props;

  let liv = 2.5;

  let totalFinal = Number(total) + Number(liv);

  console.log(typeof total);

  return (
    <div>
      <div className="sous-total">
        <div className="livraison">
          <div>Sous-total</div> <div>{total} €</div>
        </div>
        <div className="livraison">
          <div>Livraison</div>
          <div>{liv.toFixed(2)} €</div>
        </div>
      </div>
      <div className="total">
        <div>Total</div>
        <div>{totalFinal.toFixed(2)} €</div>
      </div>
    </div>
  );
}

export default CartTotal;
