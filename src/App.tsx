import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartContainer from "./components/cartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/shared/modal";
import { calculateTotals } from "./features/cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
