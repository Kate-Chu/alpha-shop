import React, { useState } from "react";
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
import items from "./data/items";

export default function App() {
  const [step, setStep] = useState(1);
  const FORM_DISPLAY = [<Mail />, <Shipping />, <Payment />];

  const onChangeStep = (num) => {
    let finalStep = step + num;
    if (finalStep > 0 && finalStep < 4) setStep(finalStep);
  };

  return (
    <div className="container">
      <Header />
      <div className="my-5 d-flex row align-items-end justify-content-between">
        <CartContext.Provider
          value={{
            step: step,
            items: items,
          }}
        >
          <section className="col-lg-6">
            <StepProgress step={step} />
            <form className="progress-form">{FORM_DISPLAY[step - 1]}</form>
            <ProgressControl step={step} onChangeStep={onChangeStep} />
          </section>
          <Cart />
        </CartContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
