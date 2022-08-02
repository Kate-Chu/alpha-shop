import React, { useState, useContext, useCallback } from "react";
import cx from "classnames";
import CartContext from "../../context/CartContext";
import CartListItem from "./CartListItem";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./cart.css";

const Cart = React.memo((props) => {
  const data = useContext(CartContext);
  const [items, setItems] = useState(data.items);

  const onChangeQuantity = useCallback(
    (id, num) => {
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
    },
    [items]
  );

  const onRemoveItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const total = items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  const listItem = items.map((item) => {
    return (
      <CartListItem
        key={item.name}
        id={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        quantity={item.quantity}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
      />
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
        <div className="col-lg-12 row align-items-center border-top pt-4 mb-4">
          <div className="mt-1">
            <ProgressBar striped variant="warning" now={33 * data.step} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cart;
