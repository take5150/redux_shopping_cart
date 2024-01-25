import React from "react";
import { useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入っていまっせん。</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;