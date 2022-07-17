import React from "react";
import "./progressControl.css";

type ProgressControlProps = {
  step: number,
  atPrevStep: Function,
  atNextStep: Function,
};

const ProgressControl: React.FC<ProgressControlProps> = ({
  step,
  atPrevStep,
  atNextStep,
}) => {
  return (
    <section
      className={`border-top pt-4 d-flex ${
        step !== 1 ? "justify-content-between" : "justify-content-end"
      }`}
    >
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-progress-prev"
          onClick={atPrevStep}
        >
          &larr; 上一步
        </button>
      )}
      {
        <button
          type="button"
          className="btn btn-progress-next"
          onClick={atNextStep}
        >
          {step === 3 ? "確認下單" : "下一步 ➜"}
        </button>
      }
    </section>
  );
};

export default ProgressControl;
