import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/cart";
import Navbar from "./components/navbar";
import Modal from "./components/shared/modal";
import { getCartItems } from "./api";
import { AppDispatch, RootState } from './store/store';

const App = () => {
  const { cartItems, isLoading } = useSelector((state:RootState) => state.cart);
  const { isOpen } = useSelector((state:RootState) => state.modal);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCartItems());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
