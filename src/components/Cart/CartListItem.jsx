import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartListItem = (props) => {
  const { id, name, img, price, quantity, onChangeQuantity, onRemoveItem } =
    props;

  return (
    <div className="line-item d-flex align-items-top pt-3 mb-4" key={id}>
      <div className="col-lg-3">
        <img src={img} alt="item-img" className="item-img" />
      </div>
      <div className="col-lg-7">
        <p className="fs-6">{name}</p>
        <div className="w-75 d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn btn-light btn-cart"
            onClick={() => onChangeQuantity(id, -1)}
          >
            <span>
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </button>
          <span> {quantity} </span>
          <button
            type="button"
            className="btn btn-light btn-cart"
            onClick={() => onChangeQuantity(id, 1)}
          >
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </button>
          <button
            type="button"
            className="btn btn-light btn-cart text-danger"
            onClick={() => onRemoveItem(id)}
          >
            <span>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </button>
        </div>
      </div>
      <div className="col-lg-2 fw-bolder">
        &#36; <span id="total">{price * quantity}</span>
      </div>
    </div>
  );
};

export default memo(CartListItem);
