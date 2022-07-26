import React from "react";
import "./progressControl.css";

type ProgressControlProps = {
  step: number,
  atStepChange: () => void,
};

const ProgressControl: React.FC<ProgressControlProps> = React.memo((props) => {
  const { step, atStepChange } = props;
  const BUTTON_SETTINGS = {
    1: {
      section_className: "border-top pt-4 d-flex justify-content-end",
      next_button_text: "下一步 ➜",
    },
    2: {
      section_className: "border-top pt-4 d-flex justify-content-between",
      next_button_text: "下一步 ➜",
    },
    3: {
      section_className: "border-top pt-4 d-flex justify-content-between",
      next_button_text: "確認下單",
    },
  };
  return (
    <section className={BUTTON_SETTINGS[step].section_className}>
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-progress-prev"
          onClick={() => atStepChange(-1)}
        >
          &larr; 上一步
        </button>
      )}
      {
        <button
          type="button"
          className="btn btn-progress-next"
          onClick={() => atStepChange(1)}
        >
          {BUTTON_SETTINGS[step].next_button_text}
        </button>
      }
    </section>
  );
});

export default ProgressControl;
