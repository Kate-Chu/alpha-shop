import React, { useContext, useMemo } from "react";
import cx from "classnames";
import CartContext from "../../context/CartContext";
import CartListItem from "./CartListItem";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./cart.css";

const Cart = React.memo((props) => {
  const { state, onChangeQuantity, onRemoveItem } = useContext(CartContext);

  const total =
    state.shippingFee +
    state.items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  const listItem = useMemo(() => {
    return state.items.map((item) => {
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
  }, [state.items, onChangeQuantity, onRemoveItem]);

  return (
    <section className="col-lg-5">
      <div className="card border p-3 pb-0">
        <h5 className="mb-3">購物籃</h5>
        <div className={cx.card__lineItem}>{listItem}</div>
        <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
          <div className="col-lg-10">運費</div>
          <div className="col-lg-2 fw-bolder">{state.shippingFee}</div>
        </div>
        <div className="col-lg-12 row align-items-center border-top pt-3 mb-4">
          <div className="col-lg-10">小記</div>
          <div className="col-lg-2 fw-bolder">
            &#36; <span id="total">{total}</span>
          </div>
        </div>
        <div className="col-lg-12 row align-items-center border-top pt-4 mb-4">
          <div className="mt-1">
            <ProgressBar striped variant="warning" now={33 * state.step} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cart;
