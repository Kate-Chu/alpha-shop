import React from "react";
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

  const onChangeStep = (num) => {
    dispatch({ type: cartActions.changeStep, payload: { changeStep: num } });
  };

  const onSelectShipping = (fee) => {
    dispatch({ type: cartActions.selectShippingFee, payload: fee });
  };

  const FORM_DISPLAY = [
    <Mail />,
    <Shipping onSelectShipping={onSelectShipping} />,
    <Payment />,
  ];

  return (
    <div className="container">
      <Header />
      <div className="my-5 d-flex row align-items-end justify-content-between">
        <CartContext.Provider value={state}>
          <section className="col-lg-6">
            <StepProgress step={state.step} />
            <form className="progress-form">
              {FORM_DISPLAY[state.step - 1]}
            </form>
            <ProgressControl step={state.step} onChangeStep={onChangeStep} />
          </section>
          <Cart state={state} />
        </CartContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
