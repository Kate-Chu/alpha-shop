import React from "react";
import "./stepProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function StepProgress() {
  return (
    <div className="mt-4">
      <h3 className="mb-3">結帳</h3>
      <div className="line-item d-flex justify-content-between mt-5 w-100">
        <div className="d-flex align-items-center">
          <div>
            <span className="icon-border fs-6">1</span>
            <span className="me-3 ms-2">寄送地址</span>
          </div>
          <span>
            <hr className="hr mx-2" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <span className="icon-border fs-6">2</span>
            <span className="me-3 ms-2">運送方式</span>
          </div>
          <span>
            <hr className="hr mx-2" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <span className="icon-border fs-6">3</span>
            <span className="me-3 ms-2">付款資訊</span>
          </div>
        </div>
      </div>
    </div>
  );
}
