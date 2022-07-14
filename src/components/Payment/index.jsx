import React from "react";

export default function Payment() {
  return (
    <div className="card border-0 my-5" data-step="3">
      <h4 className="mb-3">付款資訊</h4>
      <div className="row">
        <div className="form-group col-lg-8">
          <label for="card-name" className="p-1 fw-bolder text-secondary">
            持卡人姓名
          </label>
          <input
            type="text"
            className="form-control"
            id="card-name"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-lg-8">
          <label for="card-number" className="p-1 fw-bolder text-secondary">
            電話
          </label>
          <input
            type="number"
            className="form-control"
            id="card-number"
            placeholder="1111 2222 3333 4444"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-lg-6">
          <label for="expire-date" className="p-1 fw-bolder text-secondary">
            有效期限
          </label>
          <input
            type="text"
            className="form-control"
            id="expire-date"
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="card-code" className="p-1 fw-bolder text-secondary">
            CVC / CCV
          </label>
          <input
            type="text"
            className="form-control"
            id="card-code"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
}
