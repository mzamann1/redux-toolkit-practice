import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../../icons";
import { RootState } from '../../store/store';
const Navbar = () => {
  const { amount } = useSelector((state: RootState) => state.cart);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Redux Toolkit Practice</h3>
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
