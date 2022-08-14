import React, { useCallback, useMemo } from "react";
import "./styles.css";
import Header from "./components/Header";
import StepProgress from "./components/StepProgress";
import Mail from "./components/Mail";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import Cart from "./components/Cart";
import ProgressControl from "./components/ProgressControl";
import Footer from "./components/Footer";
import CartContext from "./context/CartContext";
import { cartActions } from "./store/cartReducer";
import useCartReducer from "./store/cartReducer";

export default function App() {
  const [state, dispatch] = useCartReducer();

  const onChangeQuantity = useCallback(
    (id, num) => {
      dispatch({ type: cartActions.changeQuantity, payload: { id, num } });
    },
    [dispatch]
  );

  const onRemoveItem = useCallback(
    (id) => {
      dispatch({ type: cartActions.removeItem, payload: { id } });
    },
    [dispatch]
  );

  const onChangeStep = useCallback(
    (num) => {
      dispatch({ type: cartActions.changeStep, payload: { changeStep: num } });
    },
    [dispatch]
  );

  const onSelectShipping = useCallback(
    (fee) => {
      dispatch({ type: cartActions.selectShippingFee, payload: fee });
    },
    [dispatch]
  );

  const provideValue = useMemo(() => {
    return {
      state,
      onChangeQuantity,
      onRemoveItem,
      onChangeStep,
      onSelectShipping,
    };
  }, [state, onChangeQuantity, onRemoveItem, onChangeStep, onSelectShipping]);

  const FORM_DISPLAY = [
    <Mail />,
    <Shipping />,
    <Payment />,
  ];

  return (
    <div className="container">
      <Header />
      <div className="my-5 d-flex row align-items-end justify-content-between">
        <CartContext.Provider value={provideValue}>
          <section className="col-lg-6">
            <StepProgress />
            <form className="progress-form">
              {FORM_DISPLAY[state.step - 1]}
            </form>
            <ProgressControl />
          </section>
          <Cart state={state} />
        </CartContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
