import React from "react";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className="card border p-3 pb-0">
      <h5 className="mb-3">購物籃</h5>
      <div className="line-item d-flex align-items-top pt-3 mb-4">
        <div className="col-lg-3">
          <img
            src="https://diz36nn4q02zr.cloudfront.net/webapi/images/r/SalePageDesc/7351762/6.jpg?ts=123955"
            alt="item-img"
            className="item-img"
          />
        </div>
        <div className="col-lg-7">
          <p className="fs-6">彩色混紡溫暖感毛絨開襟罩衫</p>
          <div className="w-75 d-flex align-items-center justify-content-between">
            <button type="button" className="btn btn-light btn-cart">
              <span>
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </button>
            <span className=""> 1 </span>
            <button type="button" className="btn btn-light btn-cart">
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
            <button
              type="button"
              className="btn btn-light btn-cart text-danger"
            >
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </button>
          </div>
        </div>
        <div className="col-lg-2 fw-bolder">
          &#36; <span id="total">1,299</span>
        </div>
      </div>
      <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
        <div className="col-lg-10">運費</div>
        <div className="col-lg-2 fw-bolder">免費</div>
      </div>
      <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
        <div className="col-lg-10">小記</div>
        <div className="col-lg-2 fw-bolder">
          &#36; <span id="total">0</span>
        </div>
      </div>
    </div>
  );
}
