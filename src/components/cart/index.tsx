import React from "react";
import CartItem from "../cart/cart-item";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../shared/modal/modalSlice";
import { ICartItem } from "../../utils/interfaces/cart";
import { RootState, AppDispatch } from '../../store/store';

const CartContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item: ICartItem) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
