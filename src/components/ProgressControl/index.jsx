import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./progressControl.css";

type ProgressControlProps = {
  step: number,
  onChangeStep: () => void,
};

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

const ProgressControl: React.FC<ProgressControlProps> = React.memo((props) => {
  const { state, onChangeStep } = useContext(CartContext);
  console.log(state.step);

  return (
    <section className={BUTTON_SETTINGS[state.step].section_className}>
      {state.step !== 1 && (
        <button
          type="button"
          className="btn btn-progress-prev"
          onClick={() => onChangeStep(-1)}
        >
          &larr; 上一步
        </button>
      )}
      {
        <button
          type="button"
          className="btn btn-progress-next"
          onClick={() => onChangeStep(1)}
        >
          {BUTTON_SETTINGS[state.step].next_button_text}
        </button>
      }
    </section>
  );
});

export default ProgressControl;
