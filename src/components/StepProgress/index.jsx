import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./stepProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PROGRESS_SETTINGS = {
  1: [
    {
      icon: 1,
      text: "寄送地址",
      backgroundColor: "bg-black",
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    {
      icon: 2,
      text: "運送方式",
      backgroundColor: null,
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    { icon: 3, text: "付款資訊", backgroundColor: null, hr: null },
  ],
  2: [
    {
      icon: <FontAwesomeIcon icon={faCheck} className="number-icon" />,
      text: "寄送地址",
      backgroundColor: "bg-black",
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    {
      icon: 2,
      text: "運送方式",
      backgroundColor: "bg-black",
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    { icon: 3, text: "付款資訊", backgroundColor: null, hr: null },
  ],
  3: [
    {
      icon: <FontAwesomeIcon icon={faCheck} className="number-icon" />,
      text: "寄送地址",
      backgroundColor: "bg-black",
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faCheck} className="number-icon" />,
      text: "運送方式",
      backgroundColor: "bg-black",
      hr: (
        <span>
          <hr className="hr mx-2" />
        </span>
      ),
    },
    { icon: 3, text: "付款資訊", backgroundColor: "bg-black", hr: null },
  ],
};

const StepProgress = React.memo(() => {
  const { state } = useContext(CartContext);

  const progress = PROGRESS_SETTINGS[state.step].map((item, index) => {
    return (
      <div className="d-flex align-items-center" key={index}>
        <div>
          <span className={`icon-border fs-6 ${item.backgroundColor}`}>
            {item.icon}
          </span>
          <span className="me-3 ms-2">{item.text}</span>
        </div>
        {item.hr}
      </div>
    );
  });

  return (
    <div className="mt-4">
      <h3 className="mb-3">結帳</h3>
      <div className="line-item d-flex justify-content-between mt-5 w-100">
        {progress}
      </div>
    </div>
  );
});

export default StepProgress;
