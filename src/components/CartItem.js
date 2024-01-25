import React from "react";
import { MinusIcon, PlusIcon } from "../HeroIcons";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <p>数量：{amount}</p>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
