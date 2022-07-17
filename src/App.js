import React from "react";
import "./styles.css";
import Header from "./components/Header";
import StepProgress from "./components/StepProgress";
import Mail from "./components/Mail";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import ProgressControl from "./components/ProgressControl";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const [step, setStep] = React.useState(1);

  const atPrevStep = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const atNextStep = () => {
    if (step === 3) return;
    setStep((prev) => prev + 1);
  };

  return (
    <div className="container">
      <Header />
      <section className="my-5 d-flex row align-items-end justify-content-between">
        <section className="col-lg-6">
          <StepProgress step={step} />
          <form className="progress-form">
            {step === 1 && <Mail />}
            {step === 2 && <Shipping />}
            {step === 3 && <Payment />}
          </form>
          <ProgressControl
            step={step}
            atPrevStep={atPrevStep}
            atNextStep={atNextStep}
          />
        </section>
        <section className="col-lg-5">
          <Cart />
        </section>
      </section>
      <Footer />
    </div>
  );
}
