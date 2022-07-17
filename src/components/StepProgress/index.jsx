import React from "react";
import "./stepProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StepProgress = ({ step }) => {
  return (
    <div className="mt-4">
      <h3 className="mb-3">結帳</h3>
      <div className="line-item d-flex justify-content-between mt-5 w-100">
        <div className="d-flex align-items-center">
          <div>
            <span className={"icon-border fs-6 bg-black"}>
              {step !== 1 ? (
                <FontAwesomeIcon icon={faCheck} className="number-icon" />
              ) : (
                1
              )}
            </span>
            <span className="me-3 ms-2">寄送地址</span>
          </div>
          <span>
            <hr className="hr mx-2" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <span
              className={`icon-border fs-6 ${step === 1 ? "" : "bg-black"}`}
            >
              {step === 3 ? (
                <FontAwesomeIcon icon={faCheck} className="number-icon" />
              ) : (
                2
              )}
            </span>
            <span className="me-3 ms-2">運送方式</span>
          </div>
          <span>
            <hr className="hr mx-2" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <span
              className={`icon-border fs-6 ${step === 3 ? "bg-black" : ""}`}
            >
              3
            </span>
            <span className="me-3 ms-2">付款資訊</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
