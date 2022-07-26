import React, { useState } from "react";
import cx from "classnames";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = React.memo((props) => {
  const [items, setItems] = useState(props.items);
  let total = 0;

  const onChangeQuantity = (id, num) => {
    const newItems = items.map((item) => {
      if (item.id === id && item.quantity + num > 0) {
        return {
          ...item,
          quantity: item.quantity + num,
        };
      }
      return item;
    });
    return setItems(newItems);
  };

  const listItem = items.map((item) => {
    total += item.price * item.quantity;
    return (
      <div className="line-item d-flex align-items-top pt-3 mb-4" key={item.id}>
        <div className="col-lg-3">
          <img src={item.img} alt="item-img" className="item-img" />
        </div>
        <div className="col-lg-7">
          <p className="fs-6">{item.name}</p>
          <div className="w-75 d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-light btn-cart"
              onClick={() => onChangeQuantity(item.id, -1)}
            >
              <span>
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </button>
            <span> {item.quantity} </span>
            <button
              type="button"
              className="btn btn-light btn-cart"
              onClick={() => onChangeQuantity(item.id, 1)}
            >
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
          &#36; <span id="total">{item.price * item.quantity}</span>
        </div>
      </div>
    );
  });

  return (
    <section className="col-lg-5">
      <div className="card border p-3 pb-0">
        <h5 className="mb-3">購物籃</h5>
        <div className={cx.card__lineItem}>{listItem}</div>
        <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
          <div className="col-lg-10">運費</div>
          <div className="col-lg-2 fw-bolder">免費</div>
        </div>
        <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
          <div className="col-lg-10">小記</div>
          <div className="col-lg-2 fw-bolder">
            &#36; <span id="total">{total}</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cart;
