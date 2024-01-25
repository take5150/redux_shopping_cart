import React from "react";
import { MinusIcon, PlusIcon } from "../HeroIcons";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  minusCartItem,
  removeItem,
} from "../features/cart/CartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <p>数量：{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(addCartItem(id))}
        >
          <PlusIcon />
        </button>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(minusCartItem(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
