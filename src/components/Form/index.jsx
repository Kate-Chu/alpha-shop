import React, { useMemo, memo } from "react";
import StepProgress from "../StepProgress";
import Mail from "../Mail";
import Shipping from "../Shipping";
import Payment from "../Payment";
import ProgressControl from "../ProgressControl";

const Form = memo(() => {
  const [step, setStep] = React.useState(1);
  const FORM_DISPLAY = [<Mail />, <Shipping />, <Payment />];

  const onChangeStep = (num) => {
    let finalStep = step + num;
    if (finalStep > 0 && finalStep < 4) setStep(finalStep);
  };

  const formSection = useMemo(() => {
    return (
      <section className="col-lg-6">
        <StepProgress step={step} />
        <form className="progress-form">{FORM_DISPLAY[step - 1]}</form>
        <ProgressControl step={step} onChangeStep={onChangeStep} />
      </section>
    );
  }, [step]);

  return formSection;
});

export default Form;
