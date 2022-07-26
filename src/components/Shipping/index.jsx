import React from "react";

const Shipping = React.memo(() => {
  return (
    <div className="card border-0 my-5" data-step="2">
      <h4 className="mb-3">運送方式</h4>
      <div
        className="standard-shipping-ratio form-check border rounded p-3 d-flex align-items-center"
        data-selected="true"
      >
        <div className="col-lg-1">
          <input
            className="form-check-input mx-2"
            type="radio"
            name="shipping"
            id="standard-shipping"
          />
        </div>
        <div className="col-lg-11 ms-2">
          <label
            className="form-check-label row align-items-center"
            htmlFor="standard-shipping"
          >
            <div className="col-lg-10">
              <div>標準運送</div>
              <div className="text-secondary">約 3~7 個工作天</div>
            </div>
            <div className="col-lg-2">免費</div>
          </label>
        </div>
      </div>
      <div className="form-check border rounded p-3 d-flex align-items-center mt-4">
        <div className="col-lg-1">
          <input
            className="form-check-input mx-2"
            type="radio"
            name="shipping"
            id="DHL-shipping"
          />
        </div>
        <div className="col-lg-11 ms-2">
          <label
            className="form-check-label row align-items-center"
            htmlFor="DHL-shipping"
          >
            <div className="col-lg-10">
              <div>DHL 貨運</div>
              <div className="text-secondary">48 小時內送達</div>
            </div>
            <div className="col-lg-2"> &#36; 500</div>
          </label>
        </div>
      </div>
    </div>
  );
});

export default Shipping;
