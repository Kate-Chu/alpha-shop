import React from "react";

const Mail = () => {
  return (
    <div className="card border-0 my-5" data-step="1">
      <h4 className="mb-3">寄送地址</h4>
      <div className="row">
        <div className="form-group col-lg-4">
          <label for="title" className="p-1">
            稱謂
          </label>
          <select className="form-control" id="title">
            <option>先生</option>
            <option>小姐</option>
          </select>
        </div>
        <div className="form-group col-lg-8">
          <label for="name" className="p-1">
            姓名
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="請輸入姓名"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-lg-6">
          <label for="phone" className="p-1">
            電話
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className="form-group col-lg-6">
          <label for="email" className="p-1">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-lg-4">
          <label for="county" className="p-1">
            縣市
          </label>
          <select className="form-control" id="county">
            <option>請選擇縣市</option>
          </select>
        </div>
        <div className="form-group col-lg-8">
          <label for="address" className="p-1">
            地址
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
  );
};

export default Mail;
